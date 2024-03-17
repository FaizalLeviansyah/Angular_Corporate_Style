import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {ListModel} from './list.model';

export type SortColumn = keyof ListModel | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface ticketSortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[ticketsortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdListSortableHeader {

  @Input() ticketsortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() ticketsort = new EventEmitter<ticketSortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.ticketsort.emit({column: this.ticketsortable, direction: this.direction});
  }
}
