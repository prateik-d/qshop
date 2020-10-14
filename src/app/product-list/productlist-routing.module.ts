import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productlistPage } from './productlist.page';

const routes: Routes = [
  {
    path: '',
    component: productlistPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productlistPageRoutingModule {}
