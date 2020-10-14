import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { productlistPage } from './productlist.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { productlistPageRoutingModule } from './productlist-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    productlistPageRoutingModule
  ],
  declarations: [productlistPage]
})
export class productlistPageModule {}
