/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {OrdersModel} from './orders.model';
import {Orders} from './data';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from './orders-sortable.directive';
// Date Format
import {DatePipe} from '@angular/common';

interface SearchResult {
  countries: OrdersModel[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  type: string;
  status: string;
  date: string;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  startIndex: number;
  endIndex: number;
  totalRecords: number;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(countries: OrdersModel[], column: SortColumn, direction: string): OrdersModel[] {
  if (direction === '' || column === '') {
    return countries;
  } else {
    return [...countries].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(country: OrdersModel, term: string, pipe: PipeTransform) {
  return country.date.toLowerCase().includes(term.toLowerCase())
  || country.time.toLowerCase().includes(term.toLowerCase())
  || country.img.toLowerCase().includes(term.toLowerCase())
  || country.coinName.toLowerCase().includes(term.toLowerCase())
  || country.type.toLowerCase().includes(term.toLowerCase())
  || country.quantity.toLowerCase().includes(term.toLowerCase())
  || country.orderValue.toLowerCase().includes(term.toLowerCase())
  || country.avgPrice.toLowerCase().includes(term.toLowerCase())
  || country.price.toLowerCase().includes(term.toLowerCase())
  || country.status.toLowerCase().includes(term.toLowerCase())
  ;
}

@Injectable({providedIn: 'root'})
export class BuySellService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _countries$ = new BehaviorSubject<OrdersModel[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    type: '',
    status: '',
    date: '',
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
    startIndex: 0,
    endIndex: 9,
    totalRecords: 0
  };

  constructor(private pipe: DecimalPipe, private datePipe: DatePipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._countries$.next(result.countries);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get countries$() { return this._countries$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get type() { return this._state.type; }
  get status() { return this._state.status; }
  get date() { return this._state.date; }
  get searchTerm() { return this._state.searchTerm; }
  get startIndex() { return this._state.startIndex; }
  get endIndex() { return this._state.endIndex; }
  get totalRecords() { return this._state.totalRecords; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set type(type: any) { this._set({type}); }
  set status(status: any) { this._set({status}); }
  set date(date: any) { this._set({date}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }
  set startIndex(startIndex: number) { this._set({ startIndex }); }
  set endIndex(endIndex: number) { this._set({ endIndex }); }
  set totalRecords(totalRecords: number) { this._set({ totalRecords }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, type, status, page, date, searchTerm} = this._state;

    // 1. sort
    let countries = sort(Orders, sortColumn, sortDirection);

    // 2. filter
    countries = countries.filter(country => matches(country, searchTerm, this.pipe));
    

    // 3. Type Filter
    if(type){
      countries = countries.filter(country => country.type == type);
    }
    else{
      countries = countries;
    }

    // 4. Date Filter   
    if(date){
      countries = countries.filter(country => new Date(country.date) >= new Date(Object.values(date)[0]) && new Date(country.date) <= new Date(Object.values(date)[1]));
    }
    else{
      countries = countries;
    }

    // 5. Status Filter
    if(status){
      countries = countries.filter(country => country.status == status);
    }
    else{
      countries = countries;
    }
    const total = countries.length;
    

    // 6. paginate
    this.totalRecords = countries.length;
    this._state.startIndex = (page - 1) * this.pageSize + 1;
    this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
        this.endIndex = this.totalRecords;
    }
    countries = countries.slice(this._state.startIndex - 1, this._state.endIndex);
    return of({countries, total});
  }
}
