import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import auth from 'firebase/compat/app';
import { Utente } from '../model/utente.model';
import { AuthService } from '../services/auth.service';
import { RicetteServiceService } from '../services/ricette-service.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: '../app.component.css'
})
export class HeaderComponent {
isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private authService: AuthService,
              private ricetteService: RicetteServiceService) {}

  googleAuthProvider = new auth.auth.GoogleAuthProvider();

  loginWithGoogle() {
    this.afAuth.signInWithPopup(this.googleAuthProvider)
    .then((result) => {
      console.log(result.user);
      if (result.user) {
          this.sendUserToBackend(result.user);
          this.authService.setUserLogged(true);       
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
    this.authService.setUserLogged(false);
    
    this.router.navigate(['/home']);

  }

  getUserLog() {
    return this.authService.isUserLogged();
  }

    showLoginAlert() {
      alert("Effettua il login prima di accedere all'Area Personale.");
  }

  sendUserToBackend(user: any) {
    var utente: Utente = {"userCode": user.uid, "tipo": "utente", "email": user.email, "nome": user.displayName};
    console.log('utente', utente.email);
    this.authService.sendUserToBackend(utente);
}

searchQuery: string = '';
search(){
  if(this.searchQuery.trim() !== ''){
    this.router.navigate(['/ricette-nome/'+ this.searchQuery]);
    this.searchQuery = '';
  }
}

  

}


