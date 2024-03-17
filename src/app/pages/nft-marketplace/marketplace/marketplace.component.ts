import { Component, OnInit } from '@angular/core';

import { marketplaceModel, tradingModel, recentModel, popularModel } from './marketplace.model';
import { marketplaceData, tradingData, recentData, popularData } from './data';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})

/**
 * Marketplace Component
 */
export class MarketplaceComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  marketplaceData!: marketplaceModel[];
  tradingData!: tradingModel[];
  recentData!: recentModel[];
  popularData!: popularModel[];

  constructor() { }

  ngOnInit(): void {
     /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'NFT Marketplace' },
      { label: 'Marketplace', active: true }
    ];

    /**
    * fetches data
    */
    this._fetchData();
  }

   /**
 * Trending All Categories
 */
  private _fetchData() {
    this.marketplaceData = marketplaceData;
    this.tradingData = tradingData;
    this.recentData = recentData;
    this.popularData = popularData;
  }

  /**
   * Active Toggle navbar
   */
  activeMenu(id:any) {            
    document.querySelector('.heart_icon_'+id)?.classList.toggle('active');
  }

}
