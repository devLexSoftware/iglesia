import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-nuevo-lugar",
  templateUrl: "./nuevo-lugar.page.html",
  styleUrls: ["./nuevo-lugar.page.scss"],
})
export class NuevoLugarPage implements OnInit {
  lugar = {
    asientos: "",
    fecha: "",
    disponibles: "",
  };
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

  save_lugar() {
    if (this.lugar.asientos !== "" && this.lugar.fecha !== "") {
      this.lugar.disponibles = this.lugar.asientos;
      this.anFS
        .collection("lugares")
        .add(this.lugar)
        .then(() => {
          this.presentAlert("Muy bien", "Lugar agregado con exito");
        })
        .catch(() => {
          this.presentAlert("Error", "Ocurrio un error al subir el lugar");
        });
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
