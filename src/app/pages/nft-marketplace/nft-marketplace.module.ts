import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Bootstrap 
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule, NgbProgressbarModule, NgbNavModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// Ngx Sliders
import { NgxSliderModule } from '@angular-slider/ngx-slider';

// Drop Zone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Component pages
import { NftMarketplaceRoutingModule } from "./nft-marketplace-routing.module";
import { SharedModule } from '../../shared/shared.module';
import { AuctionComponent } from './auction/auction.component';
import { WalletComponent } from './wallet/wallet.component';
import { CreatorsComponent } from './creators/creators.component';
import { CreateComponent } from './create/create.component';
import { CollectionsComponent } from './collections/collections.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { RankingComponent } from './ranking/ranking.component';

import { NgbdRankingSortableHeader } from "./ranking/ranking-sortable.directive";

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    ExploreComponent,
    AuctionComponent,
    WalletComponent,
    CreatorsComponent,
    CreateComponent,
    CollectionsComponent,
    ItemDetailsComponent,
    MarketplaceComponent,
    RankingComponent,
    NgbdRankingSortableHeader
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NftMarketplaceRoutingModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbProgressbarModule,
    NgbNavModule,
    NgbCollapseModule,
    SharedModule,
    NgxSliderModule,
    DropzoneModule,
    SimplebarAngularModule,
  ]
})
export class NftMarketplaceModule { }
