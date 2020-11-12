import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharbelPageRoutingModule } from './charbel-routing.module';

import { CharbelPage } from './charbel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharbelPageRoutingModule
  ],
  declarations: [CharbelPage]
})
export class CharbelPageModule {}
