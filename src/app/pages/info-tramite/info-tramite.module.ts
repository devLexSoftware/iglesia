import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoTramitePageRoutingModule } from './info-tramite-routing.module';

import { InfoTramitePage } from './info-tramite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoTramitePageRoutingModule
  ],
  declarations: [InfoTramitePage]
})
export class InfoTramitePageModule {}
