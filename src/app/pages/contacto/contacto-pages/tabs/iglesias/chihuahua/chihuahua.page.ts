import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-chihuahua',
  templateUrl: './chihuahua.page.html',
  styleUrls: ['./chihuahua.page.scss'],
})
export class ChihuahuaPage implements OnInit {

  constructor(
    private inAppBrowser: InAppBrowser
  ) { }

  ngOnInit() {
  }

  openSocialNewtwork(url: string) {
    this.inAppBrowser.create(url, '_system');
  }

}
