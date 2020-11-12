import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { Camera } from "@ionic-native/camera/ngx";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from "@angular/forms";

export const firebaseConfig = {
  apiKey: "AIzaSyA2n152e6anVaXHRR349bXIwbpUF6DUT0k",
  authDomain: "iglesia-e7b45.firebaseapp.com",
  databaseURL: "https://iglesia-e7b45.firebaseio.com",
  projectId: "iglesia-e7b45",
  storageBucket: "iglesia-e7b45.appspot.com",
  messagingSenderId: "734909831721",
  appId: "1:734909831721:web:70f2c58ee3b6f48980da38",
  measurementId: "G-EX7EDPXXL1",
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
