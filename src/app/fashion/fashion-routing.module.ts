import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fashionPage } from './fashion.page';

const routes: Routes = [
  {
    path: '',
    component: fashionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class fashionPageRoutingModule {}
