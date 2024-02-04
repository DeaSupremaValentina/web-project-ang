import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import auth from 'firebase/compat/app';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Utente } from '../model/utente.model';
import firebase from 'firebase/compat/app';

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
      if (result.user) {
          this.sendUserToBackend(result.user);
          this.userLogged = true;
        
      }
    })
    .catch((error) => {
      console.error(error);
    });
      console.log('userloggato');
      
  
    
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

    var utente: Utente = {"userCode": user.uid, "tipo": "utente", "email": user.email, "nome": user.displayName};
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer', 
    });

    this.http.post<Utente>(backendUrl + '/login', utente, {headers: headers, withCredentials: true}).subscribe(
      (data: any) => {
          console.log('Successo durante l\'invio dell\'utente al backend', data);
      },
      (error:any) => {
          console.error('Errore durante l\'invio dell\'utente al backend', error);
      }
  );
}
  
  }


