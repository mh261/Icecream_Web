import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IcecreamComponent } from './icecream.component';

const routes: Routes = [{ path: '', component: IcecreamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IcecreamRoutingModule { }
