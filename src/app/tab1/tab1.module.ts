import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";
import { NuevaNoticiaPageModule } from "../pages/nueva-noticia/nueva-noticia.module";
import { NuevaNoticiaPage } from "../pages/nueva-noticia/nueva-noticia.page";

import { Tab1PageRoutingModule } from "./tab1-routing.module";

@NgModule({
  entryComponents: [NuevaNoticiaPage],

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NuevaNoticiaPageModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
