import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisasPageRoutingModule } from './misas-routing.module';

import { MisasPage } from './misas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisasPageRoutingModule
  ],
  declarations: [MisasPage]
})
export class MisasPageModule {}
