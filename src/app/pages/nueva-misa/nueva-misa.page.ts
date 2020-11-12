import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-nueva-misa",
  templateUrl: "./nueva-misa.page.html",
  styleUrls: ["./nueva-misa.page.scss"],
})
export class NuevaMisaPage implements OnInit {
  misa = {
    titulo: "",
    link: "",
    texto: "",
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

  save_misa() {
    if (
      this.misa.titulo !== "" &&
      this.misa.texto !== "" &&
      this.misa.link !== ""
    ) {
      this.anFS
        .collection("misas")
        .add(this.misa)
        .then((data) => {
          this.presentAlert("Muy bien", "Misa agregada con exito", data.id);
        })
        .catch(() => {
          this.presentAlert("Error", "Ocurrio un error al subir la misa");
        });
    } else {
      this.presentToast();
    }
  }

  async presentAlert(titulo, mensaje, id = "") {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      backdropDismiss: false,
      mode: "ios",
      buttons: [
        {
          text: "Okay",
          handler: (blah) => {
            this.modalCtrl.dismiss({ id });
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
