import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { fashionPage } from './fashion.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { fashionPageRoutingModule } from './fashion-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    fashionPageRoutingModule
  ],
  declarations: [fashionPage]
})
export class fashionPageModule {}
