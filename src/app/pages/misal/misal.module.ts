import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisalPageRoutingModule } from './misal-routing.module';

import { MisalPage } from './misal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisalPageRoutingModule
  ],
  declarations: [MisalPage]
})
export class MisalPageModule {}
