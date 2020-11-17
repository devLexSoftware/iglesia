import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'chihuahua',
        loadChildren: () => import('./iglesias/chihuahua/chihuahua.module').then( m => m.ChihuahuaPageModule)
      },
      {
        path: 'puebla',
        loadChildren: () => import('./iglesias/puebla/puebla.module').then( m => m.PueblaPageModule)
      },
      {
        path: 'saltillo',
        loadChildren: () => import('./iglesias/saltillo/saltillo.module').then( m => m.SaltilloPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
