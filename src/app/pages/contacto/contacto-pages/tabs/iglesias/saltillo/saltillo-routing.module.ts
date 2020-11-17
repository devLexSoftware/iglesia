import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaltilloPage } from './saltillo.page';

const routes: Routes = [
  {
    path: '',
    component: SaltilloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaltilloPageRoutingModule {}
