import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PueblaPageRoutingModule } from './puebla-routing.module';
import { PueblaPage } from './puebla.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PueblaPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [PueblaPage]
})
export class PueblaPageModule {}
