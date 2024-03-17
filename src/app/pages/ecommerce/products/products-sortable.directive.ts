import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {productModel} from './products.model';

export type SortColumn = keyof productModel | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface productSortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[productsortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdProductsSortableHeader {

  @Input() productsortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() productsort = new EventEmitter<productSortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.productsort.emit({column: this.productsortable, direction: this.direction});
  }
}
