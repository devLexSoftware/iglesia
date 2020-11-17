import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-meronitas-mx',
  templateUrl: './meronitas-mx.page.html',
  styleUrls: ['./meronitas-mx.page.scss'],
})
export class MeronitasMxPage implements OnInit {

  constructor(private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
  }

  openSocialNewtwork(url: string) {
    this.inAppBrowser.create(url, '_system');
  }

}
