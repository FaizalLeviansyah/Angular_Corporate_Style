import { Component, QueryList, ViewChildren } from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';

import {creatorsModel, creatorsListModel} from './creators.model';
import { creatorsData, creatorsListData } from './data';
import { CreatorsService } from './creators.service';
import { NgbdCreatorsSortableHeader, SortEvent } from './creators-sortable.directive';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss'],
  providers: [CreatorsService, DecimalPipe]
})

/**
 * Creators Component
 */
export class CreatorsComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  creatorsData!: creatorsModel[];

  // Table data
  creatorsListData$!: Observable<creatorsListModel[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdCreatorsSortableHeader) headers!: QueryList<NgbdCreatorsSortableHeader>;
  
  constructor(public service: CreatorsService) {
    this.creatorsListData$ = service.countries$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'NFT Marketplace' },
      { label: 'Creators', active: true }
    ];

    this.creatorsData = creatorsData;
  }

}
