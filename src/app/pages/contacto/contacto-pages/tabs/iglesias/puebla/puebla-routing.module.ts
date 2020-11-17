import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PueblaPage } from './puebla.page';

const routes: Routes = [
  {
    path: '',
    component: PueblaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PueblaPageRoutingModule {}
