import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-nuevo-tramite",
  templateUrl: "./nuevo-tramite.page.html",
  styleUrls: ["./nuevo-tramite.page.scss"],
})
export class NuevoTramitePage implements OnInit {
  tramite = {
    titulo: "",
    pasos: "",
    requisitos: [],
  };
  img: any = "";

  constructor(
    private modalCtrl: ModalController,
    private anFS: AngularFirestore,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  cerrar_menu() {
    this.modalCtrl.dismiss();
  }

  add() {
    this.tramite.requisitos.push({ valor: "" });
  }

  save_tramite() {
    let camps_requisitos = false;
    this.tramite.requisitos.map((requisito) => {
      if (requisito.valor === "") {
        camps_requisitos = true;
      }
    });

    if (!camps_requisitos) {
      if (this.tramite.pasos !== "" && this.tramite.titulo !== "") {
        this.anFS
          .collection("tramites")
          .add(this.tramite)
          .then(() => {
            this.presentAlert("Muy bien", "Tramite agregada con exito");
          })
          .catch(() => {
            this.presentAlert("Error", "Ocurrio un error al subir el tramite");
          });
      } else {
        this.presentToast();
      }
    } else {
      this.presentToast();
    }
  }

  async presentAlert(titulo, mensaje) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      backdropDismiss: false,
      mode: "ios",
      buttons: [
        {
          text: "Okay",
          handler: (blah) => {
            this.modalCtrl.dismiss();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Llene todos los campos porfavor.",
      duration: 2000,
    });
    toast.present();
  }
}
