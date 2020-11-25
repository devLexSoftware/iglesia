import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NuevaNoticiaPage } from "../pages/nueva-noticia/nueva-noticia.page";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActionSheetController } from "@ionic/angular";
import { CiudadService } from "../services/ciudad.service";
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  
  noticias = [];

  constructor(
    private modalCtrl: ModalController,
    private angularFirestore: AngularFirestore,
    public actionSheetController: ActionSheetController,
    private ciudadService: CiudadService
  ) {}

  ngOnInit()
  {
    if (!localStorage.getItem("selectedCity"))
    { this.ciudadService.showCitiesToSelect(); }

    this.angularFirestore
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
}
