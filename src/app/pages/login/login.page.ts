import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user = {
    email: "",
    password: "",
  };

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {}

  save() {
    this.afAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
  }
}
