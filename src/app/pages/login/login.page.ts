import { Component, OnDestroy, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";

import { UiService } from "../../services/ui.service";
import { User } from "../../models/User.model";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit, OnDestroy {
  
  aFsSubscription$: Subscription;

  user: User = {
    email: "",
    password: "",
  };

  constructor(
    private angularFireAuth: AngularFireAuth,
    private uiService: UiService,
    private angularFirestone: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.aFsSubscription$.unsubscribe();
  }

  login()
  {
    this.angularFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password).then(loginData => {

      this.aFsSubscription$ = this.angularFirestone.collection('usuarios').doc(loginData.user.uid).get().subscribe(data => {
        
        const rol = data.data().rol;

        if (['admin', 'cliente'].indexOf(rol) === -1)
        {
          this.uiService.showAlert(
            'Ups, ha ocurrido un error',
            'El usuario no cuenta con un rol asignado',
            ['Aceptar']
          );

          return;
        }

        localStorage.setItem('loggedUser', JSON.stringify({
          uid: loginData.user.uid,
          rol
        }));

        this.router.navigateByUrl(`/tabs`);
      });

    }).catch(err => {
      console.error('Error al iniciar sesión', err);
      this.uiService.showAlert(
        'Ups, ha ocurrido un error',
        'Contacte al administrador de la aplicación',
        ['Aceptar']
      );
    });
  }
}
