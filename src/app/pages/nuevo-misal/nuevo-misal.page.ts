import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
@Component({
  selector: "app-nuevo-misal",
  templateUrl: "./nuevo-misal.page.html",
  styleUrls: ["./nuevo-misal.page.scss"],
})
export class NuevoMisalPage implements OnInit {
  misal = {
    titulo: "",
    link: "",
    texto: "",
    leccionario: "",
  };
  constructor(
    private modalCtrl: ModalController,
    private anFS: AngularFirestore,
    public alertController: AlertController,
    public toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  cerrar_menu() {
    this.modalCtrl.dismiss();
  }

  save_misa() {
    if (
      this.misal.titulo !== "" &&
      this.misal.texto !== "" &&
      this.misal.link !== "" &&
      this.misal.leccionario !== ""
    ) {
      this.anFS
        .collection("misales")
        .add(this.misal)
        .then((data) => {
          this.presentAlert("Muy bien", "Misal agregada con exito", data.id);
        })
        .catch(() => {
          this.presentAlert("Error", "Ocurrio un error al subir el misal");
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
            this.modalCtrl.dismiss();
            if (id !== "") this.router.navigateByUrl(`/previa-misal/${id}`);
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
