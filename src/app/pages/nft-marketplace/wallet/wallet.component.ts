import { Component, OnInit } from '@angular/core';

import {walletModel} from './wallet.model';
import { walletData } from './data';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})

/**
 * Wallet Component
 */
export class WalletComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  walletData!: walletModel[];

  constructor() { }

  ngOnInit(): void {
     /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'NFT Marketplace' },
      { label: 'Wallet Connect', active: true }
    ];

    /**
     * fetches data
     */
     this._fetchData();

  }

  /**
  * NFT Wallet data fetches
  */
  private _fetchData() {
    this.walletData = walletData;
  }

}
