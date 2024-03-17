import { Component, QueryList, ViewChildren } from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import {rankingModel} from './ranking.model';
import { rankingData } from './data';
import { RankingService } from './ranking.service';
import { NgbdRankingSortableHeader, SortEvent } from './ranking-sortable.directive';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  providers: [RankingService, DecimalPipe]
})

/**
 * Ranking Component
 */
export class RankingComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  // Table data
  rankingData$!: Observable<rankingModel[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdRankingSortableHeader) headers!: QueryList<NgbdRankingSortableHeader>;

  constructor(private modalService: NgbModal,public service: RankingService, private formBuilder: UntypedFormBuilder) {
    setTimeout(() => {
      this.rankingData$ = service.countries$;
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1000);

    this.total$ = service.total$;
  }

  ngOnInit(): void {
     /**
    * BreadCrumb
    */
      this.breadCrumbItems = [
        { label: 'NFT Marketplace' },
        { label: 'Ranking', active: true }
      ];
  }

  /**
  * Sort table data
  * @param param0 sort the column
  *
  */
   onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
