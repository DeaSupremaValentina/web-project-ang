import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Ricetta } from '../model/ricetta';
import { AuthService } from './auth.service';
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

  getRicettaByID(id: number): Observable<Ricetta> {
    const url = `${this.backendUrl}/ricette_id/${id}`;
    return this.http.get<Ricetta>(url);
  }

  dammiRicetteProposte():Observable<Ricetta[]>{
    return this.http.get<Ricetta[]>(this.backendUrl+"/tutteLeRicetteProposte");
  }

  dammiInfoRicetteByCategoria(categoria: string):Observable<Ricetta[]>{
    return this.http.get<Ricetta[]>(`${this.backendUrl}/ricette_categoria/${categoria}`);
  }
  
  salvaRicetta(ricetta: Ricetta): Observable<Ricetta> {
    return this.http.post<Ricetta>(this.backendUrl+"/salvaRicetta", ricetta.codice);
  }
  eliminaRicettaSalvata(ricetta: Ricetta): Observable<Ricetta> {
    return this.http.post<Ricetta>(this.backendUrl+"/rimuoviRicetta", ricetta.codice);
  }

  dammiRicetteSalvate():Observable<Ricetta[]>{ 
    return this.http.get<Ricetta[]>(this.backendUrl+"/ricetteSalvate");
  }

  accettaRicetta(ricetta: Ricetta): Observable<Ricetta> {
    return this.http.post<Ricetta>(this.backendUrl+"/approvaProposta", ricetta);
  }

  searchRicetteByNome(nome: string): Observable<Ricetta[]> {
    console.log(nome)
    return this.http.get<Ricetta[]>(`${this.backendUrl}/ricette_cercate/${nome}`);
  }
}
