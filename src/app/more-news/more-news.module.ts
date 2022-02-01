import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreNewsPageRoutingModule } from './more-news-routing.module';

import { MoreNewsPage } from './more-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreNewsPageRoutingModule
  ],
  declarations: [MoreNewsPage]
})
export class MoreNewsPageModule {}
