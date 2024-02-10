import { Component } from '@angular/core';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricetta } from '../model/ricetta';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Utente } from '../model/utente.model';

@Component({
  selector: 'app-ricette-salvate',
  templateUrl: './ricette-salvate.component.html',
  styleUrls: ['./ricette-salvate.component.css']
})
export class RicetteSalvateComponent {
  ricette: any;
  utente: string;
  constructor(private ricetteService: RicetteServiceService, private router: Router, private auth: AuthService) {
    this.utente = this.auth.getUser() || '';
    this.ricetteService.dammiRicetteSalvate(this.utente).subscribe((data) => {
      this.ricette = data;
    });
  }
  handleCardClick(ricetta: Ricetta) {
    this.router.navigate(['/ricette_id', ricetta.codice]);
  }
}

