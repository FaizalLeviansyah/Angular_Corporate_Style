import { Component, QueryList, ViewChildren } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { OrdersModel } from './orders.model';
import { Orders } from './data';
import { BuySellService } from './orders.service';
import { NgbdOrdersSortableHeader, orderSortEvent } from './orders-sortable.directive';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [BuySellService, DecimalPipe]
})

/**
 * Orders Component
 */
export class OrdersComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  Sell = 'Sell';
  Buy = 'Buy';
  Successful = 'Successful';
  Cancelled = 'Cancelled';
  Pending = 'Pending';

  // Table data
  OrdersList!: Observable<OrdersModel[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdOrdersSortableHeader) headers!: QueryList<NgbdOrdersSortableHeader>;

  constructor(public service: BuySellService) {
    setTimeout(() => {
      this.OrdersList = service.countries$;
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1200);
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Crypto' },
      { label: 'Orders', active: true }
    ];
  }
 
  /**
  * Sort table data
  * @param param0 sort the column
  *
  */
  onSort({column, direction}: orderSortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.ordersortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
