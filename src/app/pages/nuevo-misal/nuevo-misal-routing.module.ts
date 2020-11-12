import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoMisalPage } from './nuevo-misal.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoMisalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoMisalPageRoutingModule {}
