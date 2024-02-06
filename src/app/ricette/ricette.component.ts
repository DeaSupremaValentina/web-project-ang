import { Component } from '@angular/core';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricetta } from '../model/ricetta';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrl: './ricette.component.css'
})
export class RicetteComponent {
  ricette: any;
  constructor(private ricetteService: RicetteServiceService, private router: Router) {
    this.ricetteService.dammiInfoRicette().subscribe((data) => {
      this.ricette = data;
    });
  }
  handleCardClick(ricetta: Ricetta) {
    this.router.navigate(['/ricette_id', ricetta.codice]);
  }
}
