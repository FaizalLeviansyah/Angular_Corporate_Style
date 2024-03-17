import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component pages
import { TransactionsComponent } from "./transactions/transactions.component";
import { BuySellComponent } from "./buy-sell/buy-sell.component";
import { OrdersComponent } from "./orders/orders.component";
import { WalletComponent } from "./wallet/wallet.component";
import { IcoComponent } from "./ico/ico.component";
import { KycComponent } from "./kyc/kyc.component";

const routes: Routes = [
  {
    path: "transactions",
    component: TransactionsComponent
  },
  {
    path: "buy-sell",
    component: BuySellComponent
  },
  {
    path: "orders",
    component: OrdersComponent
  },
  {
    path: "wallet",
    component: WalletComponent
  },
  {
    path: "ico",
    component: IcoComponent
  },
  {
    path: "kyc",
    component: KycComponent
  }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CryptoRoutingModule {}
