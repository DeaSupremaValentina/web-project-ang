import { Component } from '@angular/core';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricetta } from '../model/ricetta';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ricette-scritte-da-te',
  templateUrl: './ricette-scritte-da-te.component.html',
  styleUrl: './ricette-scritte-da-te.component.css'
})
export class RicetteScritteDaTeComponent {
  ricette: any;
  utente: string | undefined;
  constructor(private ricetteService: RicetteServiceService, private router: Router, private auth: AuthService) {
    this.utente=auth.getUser() || '';
    this.ricetteService.dammiRicetteScritteDaUtente(this.utente).subscribe((data) => {
      this.ricette = data;
    });
  }
  handleCardClick(ricetta: Ricetta) {
    this.router.navigate(['/ricette_id', ricetta.codice]);
  }

}
