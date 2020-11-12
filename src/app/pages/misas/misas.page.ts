import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { NuevaMisaPage } from "../nueva-misa/nueva-misa.page";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-misas",
  templateUrl: "./misas.page.html",
  styleUrls: ["./misas.page.scss"],
})
export class MisasPage implements OnInit {
  misas = [];

  constructor(
    private modalCtrl: ModalController,
    private anFS: AngularFirestore,
    public alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.anFS
      .collection("misas")
      .snapshotChanges()
      .subscribe((data) => {
        this.misas = [];
        data.forEach((misas) => {
          let misasObj: any = misas.payload.doc.data();
          this.misas.push({ ...misasObj, id: misas.payload.doc.id });
        });
      });
  }

  async mostrar_modal() {
    const modal = await this.modalCtrl.create({
      component: NuevaMisaPage,
    });

    await modal.present();

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        let id = data.data.id;
        this.router.navigateByUrl(`/previa-misa/${id}`);
      }
    });
  }

  delete_misa(id) {
    this.anFS
      .collection("misas")
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
            this.delete_misa(id);
          },
        },
      ],
    });

    await alert.present();
  }

  previa(id) {
    this.router.navigateByUrl(`/previa-misa/${id}`);
  }
}
