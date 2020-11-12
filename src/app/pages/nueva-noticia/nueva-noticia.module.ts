import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { NuevaNoticiaPage } from "./nueva-noticia.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [NuevaNoticiaPage],
})
export class NuevaNoticiaPageModule {}
