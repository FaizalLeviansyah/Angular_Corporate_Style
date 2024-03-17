import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// Counter
import { CountToModule } from 'angular-count-to';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

// Load Icons
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// sortable
import{ NgbdListSortableHeader} from './list/list-sortable.directive';

// Component pages
import { InvoicesRoutingModule } from './invoices-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';

import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    CreateComponent,
    NgbdListSortableHeader
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
    CountToModule,
    FlatpickrModule,
    FeatherModule.pick(allIcons),
    InvoicesRoutingModule,
    SharedModule
  ],
  providers: [
    DatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InvoicesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
 }
