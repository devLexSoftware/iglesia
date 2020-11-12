import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NuevoTramitePage } from "../pages/nuevo-tramite/nuevo-tramite.page";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  tramites = [];
  constructor(
    private modalCtrl: ModalController,
    private anFS: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit() {
    this.anFS
      .collection("tramites")
      .snapshotChanges()
      .subscribe((data) => {
        this.tramites = [];
        data.forEach((tramite) => {
          let tramiteObj: any = tramite.payload.doc.data();

          this.tramites.push({
            ...tramiteObj,
            id: tramite.payload.doc.id,
          });
        });
      });
  }

  async mostrar_modal() {
    const modal = await this.modalCtrl.create({
      component: NuevoTramitePage,
    });

    await modal.present();
  }

  previa(id) {
    this.router.navigateByUrl(`/info-tramite/${id}`);
  }
}
