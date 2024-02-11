import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Utente } from '../model/utente.model';
import {HttpClient, HttpHeaders} from  '@angular/common/http';
import { Observable } from 'rxjs';

const backendUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLogged: boolean = false;
  private utente: Utente | undefined;
  constructor(private http:HttpClient) { }
  
  
  sendUserToBackend(utente: Utente) {
    this.utente = utente;
    this.http.post<Utente>(backendUrl + '/login', utente).subscribe(
      (data: any) => {
        
          console.log('Successo durante l\'invio dell\'utente al backend', data);
      },
      (error:any) => {
          console.error('Errore durante l\'invio dell\'utente al backend', error);
      }
  );
  }

  notifyLogout(){
    this.http.post(backendUrl + '/logout', "logout").subscribe(
      (data: any) => {
          console.log('Successo durante il logout', data);
      },
      (error:any) => {
          console.error('Errore durante il logout', error);
      }
  );
  }

  setUserLogged(userLogged: boolean) {
    this.userLogged = userLogged;
  }

  isUserLogged() {
    return this.userLogged;
  }

  getUser() {
    return this.utente?.userCode;
  }
}


