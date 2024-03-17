import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {customerModel} from './customers.model';

export type SortColumn = keyof customerModel | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface customerSortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[customersortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdcustomerSortableHeader {

  @Input() customersortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() customersort = new EventEmitter<customerSortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.customersort.emit({column: this.customersortable, direction: this.direction});
  }
}
