import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from  '@angular/common/http';

const backendUrl = 'http://localhost:8080';
@Component({
  selector: 'app-area-personale',
  templateUrl: './area-personale.component.html',
  styleUrl: '../app.component.css'
})
export class AreaPersonaleComponent {
  tipoUtente: string = '';
  constructor(private authService: AuthService, private router: Router, private http: HttpClient ) {}

  checkAdmin() {
    this.http.get(backendUrl+'/tipoUtente', { responseType: 'text' }).subscribe((data: string) => {
      console.log(data); // Controlla che la stringa ricevuta sia "admin"
      if (data === 'admin') {
        this.router.navigate(['/ricette-proposte']);
      } else {
        alert("Mi dispiace, non sei un amministratore.");
      }
    }, (error) => {
      console.error("Errore durante la chiamata HTTP:", error);
      alert("Si è verificato un errore durante la chiamata HTTP. Si prega di riprovare più tardi.");
    });
  }
  
}
