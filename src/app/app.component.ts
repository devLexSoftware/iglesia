import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { ActionSheetController } from "@ionic/angular";

import { CiudadService } from "../app/services/ciudad.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    public actionSheetController: ActionSheetController,
    private ciudadService: CiudadService
  )
  {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      const loggedUser = localStorage.getItem('loggedUser');

      if (!loggedUser) {
        this.router.navigateByUrl(`/login`);
        return;
      }

      this.router.navigateByUrl(`/tabs`);
    });
  }

  logout() {
    this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('loggedUser');
      localStorage.removeItem('selectedCity');
      this.router.navigateByUrl(`/login`);
    });
  }

  showCitiesToSelect = () => this.ciudadService.showCitiesToSelect();
}
