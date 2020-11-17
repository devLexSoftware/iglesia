import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChihuahuaPage } from './chihuahua.page';

const routes: Routes = [
  {
    path: '',
    component: ChihuahuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChihuahuaPageRoutingModule {}
