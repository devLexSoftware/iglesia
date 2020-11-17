import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-saltillo',
  templateUrl: './saltillo.page.html',
  styleUrls: ['./saltillo.page.scss'],
})
export class SaltilloPage implements OnInit {

  constructor(private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
  }

  openSocialNewtwork(url: string) {
    this.inAppBrowser.create(url, '_system');
  }

}
