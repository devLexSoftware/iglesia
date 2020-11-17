import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "tabs",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "misal",
    loadChildren: () =>
      import("./pages/misal/misal.module").then((m) => m.MisalPageModule),
  },
  {
    path: "nuevo-misal",
    loadChildren: () =>
      import("./pages/nuevo-misal/nuevo-misal.module").then(
        (m) => m.NuevoMisalPageModule
      ),
  },
  {
    path: "previa-misa/:id",
    loadChildren: () =>
      import("./pages/previa-misa/previa-misa.module").then(
        (m) => m.PreviaMisaPageModule
      ),
  },
  {
    path: "lugares",
    loadChildren: () =>
      import("./pages/lugares/lugares.module").then((m) => m.LugaresPageModule),
  },
  {
    path: "nuevo-lugar",
    loadChildren: () =>
      import("./pages/nuevo-lugar/nuevo-lugar.module").then(
        (m) => m.NuevoLugarPageModule
      ),
  },
  {
    path: "misas",
    loadChildren: () =>
      import("./pages/misas/misas.module").then((m) => m.MisasPageModule),
  },
  {
    path: "nueva-misa",
    loadChildren: () =>
      import("./pages/nueva-misa/nueva-misa.module").then(
        (m) => m.NuevaMisaPageModule
      ),
  },
  {
    path: "previa-misal/:id",
    loadChildren: () =>
      import("./pages/previa-misal/previa-misal.module").then(
        (m) => m.PreviaMisalPageModule
      ),
  },
  {
    path: "charbel",
    loadChildren: () =>
      import("./pages/charbel/charbel.module").then((m) => m.CharbelPageModule),
  },
  {
    path: "nosotros",
    loadChildren: () =>
      import("./pages/nosotros/nosotros.module").then(
        (m) => m.NosotrosPageModule
      ),
  },
  {
    path: "galeria",
    loadChildren: () =>
      import("./pages/galeria/galeria.module").then((m) => m.GaleriaPageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "info-tramite/:id",
    loadChildren: () =>
      import("./pages/info-tramite/info-tramite.module").then(
        (m) => m.InfoTramitePageModule
      ),
  },
  {
    path: "aforo/:id",
    loadChildren: () =>
      import("./pages/aforo/aforo.module").then((m) => m.AforoPageModule),
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'meronitas-mx',
    loadChildren: () => import('./pages/meronitas-mx/meronitas-mx.module').then( m => m.MeronitasMxPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
