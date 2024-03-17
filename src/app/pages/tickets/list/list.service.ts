/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {ListModel} from './list.model';
import {Orders} from './data';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from './list-sortable.directive';

// Products Services
import { restApiService } from "../../../core/services/rest-api.service";

// Date Format
import {DatePipe} from '@angular/common';

interface SearchResult {
  lists: ListModel[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  startIndex: number;
  endIndex: number;
  totalRecords: number;
  date: string;
  status: string;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(lists: ListModel[], column: SortColumn, direction: string): ListModel[] {
  if (direction === '' || column === '') {
    return lists;
  } else {
    return [...lists].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(country: ListModel, term: string, pipe: PipeTransform) {
  return country.title.toLowerCase().includes(term.toLowerCase())
  || country.client.toLowerCase().includes(term.toLowerCase()) 
  || country.assigned.toLowerCase().includes(term.toLowerCase()) 
  ;

}

@Injectable({providedIn: 'root'})
export class ListService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _lists$ = new BehaviorSubject<ListModel[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  ticketList?: any;

  private _state: State = {
    page: 1,
    pageSize: 8,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
    startIndex: 0,
    endIndex: 9,
    totalRecords: 0,
    date: '',
    status: '',
  };

  constructor(private pipe: DecimalPipe, public restApiService: restApiService, private datePipe: DatePipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._lists$.next(result.lists);
      this._total$.next(result.total);
    });

    this._search$.next();

    // Api Data
    this.restApiService.getTicketData().subscribe(
      data => {        
        const users =  JSON.parse(data);
        this.ticketList = users.data;
    });
  }

  get lists$() { return this._lists$.asObservable(); }
  get datas() { return this.ticketList; }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }
  get startIndex() { return this._state.startIndex; }
  get endIndex() { return this._state.endIndex; }
  get totalRecords() { return this._state.totalRecords; }
  get date() { return this._state.date; }
  get status() { return this._state.status; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }
  set startIndex(startIndex: number) { this._set({ startIndex }); }
  set endIndex(endIndex: number) { this._set({ endIndex }); }
  set totalRecords(totalRecords: number) { this._set({ totalRecords }); }
  set date(date: any) { this._set({date}); }
  set status(status: any) { this._set({status}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const datas = (this.datas) ?? [];
    const {sortColumn, sortDirection, pageSize, page, searchTerm, date, status} = this._state;

    // 1. sort
    let lists = sort(datas, sortColumn, sortDirection);
    
    
    // 2. filter
    lists = lists.filter(country => matches(country, searchTerm, this.pipe));

    // 4. Date Filter       
    if(date){
      lists = lists.filter(country => new Date(country.create) >= new Date(Object.values(date)[0]) && new Date(country.create) <= new Date(Object.values(date)[1]));
    }
    else{
      lists = lists;
    }

    // 5. Status Filter
    if(status){
      lists = lists.filter(country => country.status == status);
    }
    else{
      lists = lists;
    }


    const total = lists.length;

    // 3. paginate
    this.totalRecords = lists.length;
    this._state.startIndex = (page - 1) * this.pageSize + 1;
    this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
        this.endIndex = this.totalRecords;
    }
    lists = lists.slice(this._state.startIndex - 1, this._state.endIndex);
    return of({lists, total});
  }
}
