import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Ricetta } from '../model/ricetta';
import { AuthService } from './auth.service';
import { RicettaRequest } from '../model/ricettaRequest';
import { Utente } from '../model/utente.model';
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
  
  salvaRicetta(request: RicettaRequest): Observable<Ricetta> {
    return this.http.post<Ricetta>(this.backendUrl+"/salvaRicetta", request);
  }
  eliminaRicettaSalvata(request: RicettaRequest): Observable<Ricetta> {
    return this.http.post<Ricetta>(this.backendUrl+"/rimuoviRicetta", request);
  }

  dammiRicetteSalvate(utente: string):Observable<Ricetta[]>{ 
    const params= new HttpParams().set('utente',utente);
    return this.http.get<Ricetta[]>(this.backendUrl+"/ricetteSalvate",{params});
  }

  accettaRicetta(ricetta: Ricetta): Observable<Ricetta> {
    return this.http.post<Ricetta>(this.backendUrl+"/approvaProposta", ricetta);
  }

  searchRicetteByNome(nome: string): Observable<Ricetta[]> {
    return this.http.get<Ricetta[]>(`${this.backendUrl}/ricette_cercate/${nome}`);
  }

  salvaCommento(id: number, commentoNuovo: string): Observable<Ricetta> {
    return this.http.post<any>(this.backendUrl+"/salvaCommento", { id: id, comm: commentoNuovo } );
  }
}
