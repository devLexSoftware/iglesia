import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab2Page } from "./tab2.page";
import { NuevoTramitePageModule } from "../pages/nuevo-tramite/nuevo-tramite.module";
import { NuevoTramitePage } from "../pages/nuevo-tramite/nuevo-tramite.page";

import { Tab2PageRoutingModule } from "./tab2-routing.module";

@NgModule({
  entryComponents: [NuevoTramitePage],

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    NuevoTramitePageModule,
  ],
  declarations: [Tab2Page],
})
export class Tab2PageModule {}
