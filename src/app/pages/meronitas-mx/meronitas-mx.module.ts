import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MeronitasMxPageRoutingModule } from './meronitas-mx-routing.module';
import { MeronitasMxPage } from './meronitas-mx.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeronitasMxPageRoutingModule,
    FontAwesomeModule
  ],
  providers: [InAppBrowser],
  declarations: [MeronitasMxPage]
})
export class MeronitasMxPageModule {}
