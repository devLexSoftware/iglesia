import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private alertCtrlr: AlertController
  ) { }

  async showAlert(header: string, message: string, buttons?: any[]) {
    const alert = await this.alertCtrlr.create({
      header,
      message,
      buttons
    });

    await alert.present();
  }
}
