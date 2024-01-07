import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import auth from 'firebase/compat/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(private afAuth: AngularFireAuth) { }

  loginWithGoogle() {
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
