import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contatto } from '../model/contatto';

@Injectable({
  providedIn: 'root'
})
export class ChiSiamoService {

  private backendUrl = "http://localhost:8080"

  constructor(private http: HttpClient) {}

  getChiSiamoData(): Observable<Contatto> {
    return this.http.get<Contatto>(this.backendUrl + "/chi_siamo");
  }
}
