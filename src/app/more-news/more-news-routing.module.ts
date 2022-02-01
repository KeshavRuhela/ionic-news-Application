import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreNewsPage } from './more-news.page';

const routes: Routes = [
  {
    path: '',
    component: MoreNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreNewsPageRoutingModule {}
