import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { NuevoLugarPage } from "../nuevo-lugar/nuevo-lugar.page";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-lugares",
  templateUrl: "./lugares.page.html",
  styleUrls: ["./lugares.page.scss"],
})
export class LugaresPage implements OnInit {
  lugares = [];

  constructor(
    private modalCtrl: ModalController,
    private anFS: AngularFirestore,
    public alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.anFS
      .collection("lugares")
      .snapshotChanges()
      .subscribe((data) => {
        this.lugares = [];
        data.forEach((lugar) => {
          let lugarObj: any = lugar.payload.doc.data();
          lugarObj.fecha = this.get_fecha(new Date(lugarObj.fecha));
          this.lugares.push({ ...lugarObj, id: lugar.payload.doc.id });
        });
      });
  }

  async mostrar_modal() {
    const modal = await this.modalCtrl.create({
      component: NuevoLugarPage,
    });

    await modal.present();
  }

  get_fecha(fecha) {
    return `${fecha.getDay() < 10 ? `0${fecha.getDay()}` : fecha.getDay()}/${
      fecha.getMonth() + 1 < 10
        ? `0  ${fecha.getMonth() + 1}`
        : `${fecha.getMonth() + 1}`
    }/${fecha.getFullYear()} `;
  }

  delete_lugar(id) {
    this.anFS
      .collection("lugares")
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
            this.delete_lugar(id);
          },
        },
      ],
    });

    await alert.present();
  }

  reservacion(id) {
    this.router.navigateByUrl(`/aforo/${id}`);
  }
}
