import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaMisaPage } from './nueva-misa.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaMisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaMisaPageRoutingModule {}
