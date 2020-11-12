import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaMisaPageRoutingModule } from './nueva-misa-routing.module';

import { NuevaMisaPage } from './nueva-misa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaMisaPageRoutingModule
  ],
  declarations: [NuevaMisaPage]
})
export class NuevaMisaPageModule {}
