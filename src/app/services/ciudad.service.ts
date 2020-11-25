import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Subscription } from 'rxjs';
import { ActionSheetController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(
    private angularFirestore: AngularFirestore,
    private actionSheetCtrlr: ActionSheetController
  ) { }

  getCiudades = (): Promise<any> => this.angularFirestore.collection('ciudades').get().toPromise();

  async showCitiesToSelect()
  {
    const data = await this.getCiudades();

    let actionSheetButtons = [];

    data.forEach(dataC => {
      actionSheetButtons.push({
        text: dataC.data().nombre,
        handler: () => localStorage.setItem('selectedCity', dataC.data().nombre)
      });
    });

    const actionSheet = await this.actionSheetCtrlr.create({
      header: 'Seleccione una ciudad',
      buttons: [
        ...actionSheetButtons,
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => console.log("Cancel clicked"),
        },
      ],
    });
    
    await actionSheet.present();
  }
}
