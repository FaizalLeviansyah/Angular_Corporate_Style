import { Component, QueryList, ViewChildren } from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';

import {collectionModel} from './collection.model';
import { collectionData } from './data';
import { CollectionService } from './collection.service';
import { NgbdCollectionSortableHeader, SortEvent } from './collection-sortable.directive';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  providers: [CollectionService, DecimalPipe]
})

/**
 * Collections Component
 */
export class CollectionsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  // Table data
  collectionData$!: Observable<collectionModel[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdCollectionSortableHeader) headers!: QueryList<NgbdCollectionSortableHeader>;

  constructor(public service: CollectionService) {
    this.collectionData$ = service.countries$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
     /**
    * BreadCrumb
    */
      this.breadCrumbItems = [
        { label: 'NFT Marketplace' },
        { label: 'Collections', active: true }
      ];
  }

}
