import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChihuahuaPageRoutingModule } from './chihuahua-routing.module';
import { ChihuahuaPage } from './chihuahua.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChihuahuaPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [ChihuahuaPage]
})
export class ChihuahuaPageModule {}
