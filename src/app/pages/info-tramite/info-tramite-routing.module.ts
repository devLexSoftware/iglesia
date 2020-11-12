import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoTramitePage } from './info-tramite.page';

const routes: Routes = [
  {
    path: '',
    component: InfoTramitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoTramitePageRoutingModule {}
