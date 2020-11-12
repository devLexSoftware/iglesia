import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Camera } from "@ionic-native/camera/ngx";
import { DomSanitizer } from "@angular/platform-browser";
import { AngularFirestore } from "@angular/fire/firestore";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-nueva-noticia",
  templateUrl: "./nueva-noticia.page.html",
  styleUrls: ["./nueva-noticia.page.scss"],
})
export class NuevaNoticiaPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private camera: Camera,
    public DomSanitizer: DomSanitizer,
    private anFS: AngularFirestore,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  noticia = {
    titulo: "",
    contenido: "",
    link: "",
    img: "",
  };
  img: any = "";

  ngOnInit() {}

  cerrar_menu() {
    this.modalCtrl.dismiss();
  }

  imgPreAlb() {
    this.camera
      .getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        encodingType: this.camera.EncodingType.JPEG,
      })
      .then(async (picture) => {
        console.log(picture);
        this.noticia.img = "data:image/jpeg;base64," + picture;
        console.log(this.noticia);

        this.img = this.noticia.img;
      })
      .catch((error) => {
        console.log("que pedo");
        console.log(error);
      });
  }

  save_noticia() {
    if (
      this.noticia.titulo !== "" &&
      this.noticia.contenido !== "" &&
      this.noticia.link !== "" &&
      this.img !== ""
    ) {
      this.anFS
        .collection("noticias")
        .add(this.noticia)
        .then(() => {
          this.presentAlert("Muy bien", "Noticia agregada con exito");
        })
        .catch(() => {
          this.presentAlert("Error", "Ocurrio un error al subir la noticia");
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
