import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NuevaNoticiaPage } from "../pages/nueva-noticia/nueva-noticia.page";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  noticias = [];

  constructor(
    private modalCtrl: ModalController,
    private anFS: AngularFirestore,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    if (!localStorage.getItem("ciudad")) {
      this.presentActionSheet();
    }
    this.anFS
      .collection("noticias")
      .snapshotChanges()
      .subscribe((data) => {
        this.noticias = [];
        data.forEach((noticias) => {
          this.noticias.push(noticias.payload.doc.data());
        });
      });
  }

  async mostrar_modal() {
    const modal = await this.modalCtrl.create({
      component: NuevaNoticiaPage,
    });

    await modal.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Selecciona la ciudad dentro del catalogo",
      buttons: [
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
          text: "Guadalajara",
          handler: () => {
            localStorage.setItem("ciudad", "guadalajara");
          },
        },
        {
          text: "Ciudad de Mexico",
          handler: () => {
            localStorage.setItem("ciudad", "cdmx");
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
