import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {MarketModel} from './buy-sell.model';

export type SortColumn = keyof MarketModel | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface buysellSortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[buysellsortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdBuySellSortableHeader {

  @Input() buysellsortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() buysellsort = new EventEmitter<buysellSortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.buysellsort.emit({column: this.buysellsortable, direction: this.direction});
  }
}
