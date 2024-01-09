import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import auth from 'firebase/compat/app';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: '../app.component.css'
})
export class HeaderComponent {
isSidebarOpen: boolean = false;
userLogged: boolean = false;


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(private afAuth: AngularFireAuth) { }
  googleAuthProvider = new auth.auth.GoogleAuthProvider();

  loginWithGoogle() {
      
      this.afAuth.signInWithPopup(this.googleAuthProvider)
      
      .then((result) => {
        console.log(result.user);
        // Puoi gestire l'utente autenticato qui
      })
      .catch((error) => {
        console.error(error);
      });
      console.log('userloggato');
      this.userLogged = true;
  
    
  }

  logout() {
    
    this.afAuth.signOut();
    const user = this.afAuth.currentUser;
    console.log('user disconnesso', user);
    this.userLogged = false;

  }

  getUserLog() {
    return this.userLogged;
  }

}
