import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import auth from 'firebase/compat/app';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth) { }

  login() {
    const googleAuthProvider = new auth.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider)
      .then((result) => {
        console.log(result.user);
        // Puoi gestire l'utente autenticato qui
      })
      .catch((error) => {
        console.error(error);
      });
  }
}



