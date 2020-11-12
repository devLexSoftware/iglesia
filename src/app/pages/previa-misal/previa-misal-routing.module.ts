import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviaMisalPage } from './previa-misal.page';

const routes: Routes = [
  {
    path: '',
    component: PreviaMisalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviaMisalPageRoutingModule {}
