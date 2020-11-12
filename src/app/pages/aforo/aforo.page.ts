import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-aforo",
  templateUrl: "./aforo.page.html",
  styleUrls: ["./aforo.page.scss"],
})
export class AforoPage implements OnInit {
  lugar = {
    fecha: "",
    asientos: "",
    disponibles: 0,
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private anFS: AngularFirestore,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.anFS
      .collection("lugares")
      .doc(id)
      .get()
      .subscribe((data: any) => {
        let lugarObj = data.data();
        lugarObj.fecha = this.get_fecha(new Date(lugarObj.fecha));
        this.lugar = { ...lugarObj, id: data.id };
      });
  }

  get_fecha(fecha) {
    return `${fecha.getDay() < 10 ? `0${fecha.getDay()}` : fecha.getDay()}/${
      fecha.getMonth() + 1 < 10
        ? `0  ${fecha.getMonth() + 1}`
        : `${fecha.getMonth() + 1}`
    }/${fecha.getFullYear()} `;
  }

  reservar() {
    let id_user = localStorage.getItem("id");
    let reservaciones = this.lugar["reservaciones"];
    let filter_reservaciones = reservaciones.filter((data: {}) => {
      return data["id_user"] === id_user;
    });
    if (filter_reservaciones.length === 0) {
      let disponibles = this.lugar["disponibles"] - 1;
      reservaciones.push({ id_user });
      this.anFS
        .collection("lugares")
        .doc(this.lugar["id"])
        .update({ reservaciones, disponibles })
        .then(() => {
          this.presentAlert("Muy bien", "Reservacion realizada con exito");
        });
    } else {
      this.presentAlert("Error", "Ya te has registrado para este evento");
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
            this.router.navigateByUrl(`/tabs/lugares`);
          },
        },
      ],
    });

    await alert.present();
  }
}
