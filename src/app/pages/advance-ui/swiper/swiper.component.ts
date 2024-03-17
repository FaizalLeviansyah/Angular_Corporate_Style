import { Component, OnInit, ViewChild } from '@angular/core';

// Swiper Slider
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})

/**
 * Swiper Component
 */
export class SwipersComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Advance UI' },
      { label: 'Swiper Slider', active: true }
    ];
  }

  /**
   * Swiper setting
   */
   config = {
    initialSlide: 0,
    slidesPerView: 1,
  };

  /**
   * Swiper Nav&Pagination setting
   */
   NavAndPaginatoion = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true
  };

  /**
   * Swiper Pagination setting
   */
   Paginatoion = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
  };

  /**
   * Swiper Progress setting
   */
   Progress = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    scrollbar: true,
  };

  /**
   * Swiper Vertical  setting
   */
  public Vertical: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'vertical',
    slidesPerView: 1,
    pagination: true
  };

  /**
   * Swiper Mousewheel setting
   */
   public Mousewheel: SwiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    pagination: true,
    mousewheel: true,
  };

  /**
   * Swiper Coverflow setting
   */
   public Coverflow: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,
    mousewheel: true,
    breakpoints:{
      768:{
        slidesPerView: 2, 
      },
      1200:{
        slidesPerView: 5, 
      }
    }
  };

  /**
   * Swiper Responsive setting
   */
   public Responsive: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,
    mousewheel: true,
    breakpoints:{
      768:{
        slidesPerView: 2, 
      },
      1200:{
        slidesPerView: 4, 
      }
    }
  };

}
