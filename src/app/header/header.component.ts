import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import auth from 'firebase/compat/app';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

const backendUrl = 'http://localhost:8080';

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

  constructor(private afAuth: AngularFireAuth, private http: HttpClient) { }
  googleAuthProvider = new auth.auth.GoogleAuthProvider();

  loginWithGoogle() {
      
      this.afAuth.signInWithPopup(this.googleAuthProvider)
      
      .then((result) => {
        console.log(result.user);
        this.sendUserToBackend(result.user);
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

    showLoginAlert() {
      alert("Effettua il login prima di accedere all'Area Personale.");
  }

  sendUserToBackend(user: any) {
    this.http.post(backendUrl, user)
    .pipe(
      catchError((error) => {
          console.error('Errore durante l\'invio dell\'utente al backend', error);
          return throwError(error);
      })
  )
  }

}
