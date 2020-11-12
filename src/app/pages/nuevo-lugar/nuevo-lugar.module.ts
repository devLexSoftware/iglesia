import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoLugarPageRoutingModule } from './nuevo-lugar-routing.module';

import { NuevoLugarPage } from './nuevo-lugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoLugarPageRoutingModule
  ],
  declarations: [NuevoLugarPage]
})
export class NuevoLugarPageModule {}
