import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {OrdersModel} from './orders.model';

export type SortColumn = keyof OrdersModel | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface orderSortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[ordersortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdOrdersSortableHeader {

  @Input() ordersortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() orderssort = new EventEmitter<orderSortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.orderssort.emit({column: this.ordersortable, direction: this.direction});
  }
}
