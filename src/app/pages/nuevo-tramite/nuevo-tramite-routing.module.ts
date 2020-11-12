import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoTramitePage } from './nuevo-tramite.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoTramitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoTramitePageRoutingModule {}
