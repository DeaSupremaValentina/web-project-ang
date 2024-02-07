import { Component } from '@angular/core';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricetta } from '../model/ricetta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ricette-scritte-da-te',
  templateUrl: './ricette-scritte-da-te.component.html',
  styleUrl: '../app.component.css'
})
export class RicetteScritteDaTeComponent {
  ricette: any;
  constructor(private ricetteService: RicetteServiceService, private router: Router) {
    this.ricetteService.dammiRicetteScritteDaUtente().subscribe((data) => {
      this.ricette = data;
    });
  }
  handleCardClick(ricetta: Ricetta) {
    this.router.navigate(['/ricette_id', ricetta.codice]);
  }

}
