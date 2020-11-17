import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { ActionSheetController } from "@ionic/angular";

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
    private afAuth: AngularFireAuth,
    private anFS: AngularFirestore,
    private router: Router,
    public actionSheetController: ActionSheetController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.afAuth.authState.subscribe((user) => {
        if (user) {
          this.anFS
            .collection("users")
            .doc(user.uid)
            .get()
            .subscribe((data) => {
              let rol = data.data().rol;
              if (rol === "admin") {
                localStorage.setItem("rol", "admin");
                localStorage.setItem("id", data.id);
              }
              if (rol === "cliente") {
                localStorage.setItem("rol", "cliente");
                localStorage.setItem("id", data.id);
              }
              this.router.navigateByUrl(`/tabs`);
            });
        } else this.router.navigateByUrl(`/login`);
      });
    });
  }

  logout() {
    this.afAuth.signOut();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Selecciona la ciudad dentro del catalogo",
      buttons: [
        {
          text: "Puebla",
          handler: () => {
            localStorage.setItem("ciudad", "puebla");
          },
        },
        {
          text: "Chihuahua",
          handler: () => {
            localStorage.setItem("ciudad", "chihuahua");
          },
        },
        {
          text: "Saltillo",
          handler: () => {
            localStorage.setItem("ciudad", "saltillo");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
