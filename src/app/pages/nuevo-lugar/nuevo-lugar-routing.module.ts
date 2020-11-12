import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoLugarPage } from './nuevo-lugar.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoLugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoLugarPageRoutingModule {}
