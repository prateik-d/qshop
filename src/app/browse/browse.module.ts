import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { browsePage } from './browse.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { browsePageRoutingModule } from './browse-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    browsePageRoutingModule
  ],
  declarations: [browsePage]
})
export class browsePageModule {}
