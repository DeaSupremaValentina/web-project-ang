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
  
  constructor(private http:HttpClient) { }
  checkAdmin():Observable<string> {
    return this.http.get<string>(backendUrl+'/tipoUtente');
  }

  sendUserToBackend(utente: Utente) {
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
}

