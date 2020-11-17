import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeronitasMxPage } from './meronitas-mx.page';

const routes: Routes = [
  {
    path: '',
    component: MeronitasMxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeronitasMxPageRoutingModule {}
