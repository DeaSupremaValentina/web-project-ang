import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Ricetta } from './model/ricetta';
import { AuthService } from './services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class RicetteServiceService {
  private backendUrl = "http://localhost:8080"

  constructor(private http:HttpClient,private auth:AuthService) {}
  dammiInfoRicette():Observable<Ricetta[]>{
    return this.http.get<Ricetta[]>(this.backendUrl+"/tutteLeRicette");
  }

  dammiRicetteScritteDaUtente():Observable<Ricetta[]>{
    return this.http.get<Ricetta[]>(this.backendUrl+"/ricetteScritteDaUtente");
  }

  getRicettaByNome(nomeRicetta: string): Observable<Ricetta> {
    const url = `${this.backendUrl}/ricette/${nomeRicetta}`;
    return this.http.get<Ricetta>(url);
  }
}
