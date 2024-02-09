import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-area-personale',
  templateUrl: './area-personale.component.html',
  styleUrl: '../app.component.css'
})
export class AreaPersonaleComponent {
  tipoUtente: string = '';
  constructor(private authService: AuthService, private router: Router ) {}

  checkAdmin() {
    this.authService.checkAdmin().subscribe(
      (data) => {
        // Gestisci la risposta ottenuta dalla chiamata HTTP
        this.tipoUtente = data;
        if (data=== 'admin') {
          // L'utente è un amministratore, reindirizzalo alla pagina desiderata
          this.router.navigate(['/ricette-proposte']);
        } else {
          // L'utente non è un amministratore, mostra un messaggio di errore
          alert("Mi dispiace, non sei un amministratore.");
        }
      },
      (error) => {
        // Gestisci eventuali errori nella chiamata HTTP
        console.error("Errore durante il controllo dell'amministratore:", error);
        // Mostra un messaggio di errore generico
        alert("Si è verificato un errore durante il controllo dell'amministratore. Si prega di riprovare più tardi.");
      }
    );
  }
}
