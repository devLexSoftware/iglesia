import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoTramitePageRoutingModule } from './nuevo-tramite-routing.module';

import { NuevoTramitePage } from './nuevo-tramite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoTramitePageRoutingModule
  ],
  declarations: [NuevoTramitePage]
})
export class NuevoTramitePageModule {}
