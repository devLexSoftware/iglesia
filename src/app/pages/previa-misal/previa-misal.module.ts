import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PreviaMisalPageRoutingModule } from "./previa-misal-routing.module";

import { PreviaMisalPage } from "./previa-misal.page";
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviaMisalPageRoutingModule,
    YouTubePlayerModule,
  ],
  declarations: [PreviaMisalPage],
})
export class PreviaMisalPageModule {}
