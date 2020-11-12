import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaNoticiaPage } from './nueva-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaNoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaNoticiaPageRoutingModule {}
