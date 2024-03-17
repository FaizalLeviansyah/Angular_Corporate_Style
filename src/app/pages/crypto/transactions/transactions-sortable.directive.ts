import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { TransactionsModel } from './transactions.model';

export type SortColumn = keyof TransactionsModel | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };
const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);


export interface SortEvent1 {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable1]',
  host: {
    '[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
  }
})
export class NgbdTransactionsSortableHeader {

	@Input() sortable1: SortColumn = '';
	@Input() direction: SortDirection = '';
	@Output() sort1 = new EventEmitter<SortEvent1>();

  rotate() {
  	this.direction = rotate[this.direction];
		this.sort1.emit({ column: this.sortable1, direction: this.direction });
  }
}

