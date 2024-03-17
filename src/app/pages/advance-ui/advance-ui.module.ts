import { AfterViewInit, Component, OnInit ,NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

// Simple bar
import { SimplebarAngularModule } from 'simplebar-angular';

// Nestable
import { NestableModule } from 'ngx-nestable';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';

// Load Icon
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// Component pages
import { AsvanceUiRoutingModule } from './advance-ui-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SweetalertsComponent } from './sweetalerts/sweetalerts.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { AnimationComponent } from './animation/animation.component';
import { TourComponent } from './tour/tour.component';
import { SwipersComponent } from './swiper/swiper.component';
import { RatingsComponent } from './ratings/ratings.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';


@NgModule({
  declarations: [
    SweetalertsComponent,
    ScrollbarComponent,
    AnimationComponent,
    TourComponent,
    SwipersComponent,
    RatingsComponent,
    HighlightComponent,
    ScrollspyComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbRatingModule,
    SimplebarAngularModule,
    NestableModule,
    AsvanceUiRoutingModule,
    NgxUsefulSwiperModule,
    SharedModule,
    InViewportModule,
    ScrollSpyModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdvanceUiModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
 }
