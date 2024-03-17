import { Component, QueryList, ViewChildren } from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

// Range Slider
import { Options } from '@angular-slider/ngx-slider';

import {exploreModel} from './explore.model';
import { exploreData } from './data';
import { BasicService } from './explore.service';
import { NgbdExploreSortableHeader, SortEvent } from './explore-sortable.directive';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  providers: [BasicService, DecimalPipe]
})

/**
 * Explore Component
 */
export class ExploreComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  checkedList:any;
  masterSelected!:boolean;
  basicData!: exploreModel[];
  public isCollapsed = false;

  // Table data
  basicData$!: Observable<exploreModel[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdExploreSortableHeader) headers!: QueryList<NgbdExploreSortableHeader>;

  constructor(private modalService: NgbModal,public service: BasicService, private formBuilder: UntypedFormBuilder) {
    this.basicData$ = service.countries$;
    this.total$ = service.total$;    
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'NFT Marketplace' },
      { label: 'Explore Now', active: true }
    ];
  }

  
  // Range Slider Data
  value = 0;
  highValue = 1000;
  options: Options = {
    floor: 0,
    ceil: 2000
  };

  /**
   * Active Toggle navbar
   */
  activeMenu(id:any) {            
    document.querySelector('.heart_icon_'+id)?.classList.toggle('active');
  }
  
}
