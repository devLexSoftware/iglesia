import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PreviaMisaPageRoutingModule } from "./previa-misa-routing.module";

import { PreviaMisaPage } from "./previa-misa.page";
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviaMisaPageRoutingModule,
    YouTubePlayerModule,
  ],
  declarations: [PreviaMisaPage],
})
export class PreviaMisaPageModule {}
