import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChiSiamoService {

  private backendUrl = "http://localhost:8080"

  constructor(private http: HttpClient) {}
  
  backendCall() {
    return this.http.get(this.backendUrl + "/contatti", { responseType: 'text' });
  }
}
