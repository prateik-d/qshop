import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { browsePage } from './browse.page';

const routes: Routes = [
  {
    path: '',
    component: browsePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class browsePageRoutingModule {}
