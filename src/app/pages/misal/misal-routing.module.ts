import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisalPage } from './misal.page';

const routes: Routes = [
  {
    path: '',
    component: MisalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisalPageRoutingModule {}
