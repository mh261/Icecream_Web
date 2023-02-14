import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'icecream', loadChildren: () => import('./pages/icecream/icecream.module').then(m => m.IcecreamModule) }, { path: 'bill', loadChildren: () => import('./pages/bill/bill.module').then(m => m.BillModule) }, { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
