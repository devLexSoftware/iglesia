import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        loadChildren: () =>
          import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
      },
      {
        path: "misal",
        loadChildren: () =>
          import("../pages/misal/misal.module").then((m) => m.MisalPageModule),
      },
      {
        path: "previa",
        loadChildren: () =>
          import("../pages/previa-misa/previa-misa.module").then(
            (m) => m.PreviaMisaPageModule
          ),
      },
      {
        path: "lugares",
        loadChildren: () =>
          import("../pages/lugares/lugares.module").then(
            (m) => m.LugaresPageModule
          ),
      },
      {
        path: "misa",
        loadChildren: () =>
          import("../pages/misas/misas.module").then((m) => m.MisasPageModule),
      },
      {
        path: "charbel",
        loadChildren: () =>
          import("../pages/charbel/charbel.module").then(
            (m) => m.CharbelPageModule
          ),
      },
      {
        path: "galeria",
        loadChildren: () =>
          import("../pages/galeria/galeria.module").then(
            (m) => m.GaleriaPageModule
          ),
      },
      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
