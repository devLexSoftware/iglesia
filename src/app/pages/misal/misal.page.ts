import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { NuevoMisalPage } from "../nuevo-misal/nuevo-misal.page";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-misal",
  templateUrl: "./misal.page.html",
  styleUrls: ["./misal.page.scss"],
})
export class MisalPage implements OnInit {
  misales = [];

  constructor(
    private modalCtrl: ModalController,
    private anFS: AngularFirestore,
    public alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.anFS
      .collection("misales")
      .snapshotChanges()
      .subscribe((data) => {
        this.misales = [];
        data.forEach((misales) => {
          let misales_obj: any = misales.payload.doc.data();
          this.misales.push({ ...misales_obj, id: misales.payload.doc.id });
        });
      });
  }

  async mostrar_modal() {
    const modal = await this.modalCtrl.create({
      component: NuevoMisalPage,
    });

    await modal.present();
  }

  delete_misal(id) {
    this.anFS
      .collection("misales")
      .doc(id)
      .delete()
      .then(() => {})
      .catch(() => {});
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      header: "Eliminar",
      message: "Se eliminara el lugar y no se podra recuperar",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Eliminar",
          handler: () => {
            this.delete_misal(id);
          },
        },
      ],
    });

    await alert.present();
  }

  previa(id) {
    this.router.navigateByUrl(`/previa-misal/${id}`);
  }
}
