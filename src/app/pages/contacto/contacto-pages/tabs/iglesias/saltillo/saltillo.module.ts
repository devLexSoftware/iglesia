import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SaltilloPageRoutingModule } from './saltillo-routing.module';
import { SaltilloPage } from './saltillo.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaltilloPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [SaltilloPage]
})
export class SaltilloPageModule {}
