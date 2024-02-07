import { Component } from '@angular/core';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricetta } from '../model/ricetta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ricette-salvate',
  templateUrl: './ricette-salvate.component.html',
  styleUrl: '../app.component.css'
})
export class RicetteSalvateComponent {
  ricette: any;
  constructor(private ricetteService: RicetteServiceService, private router: Router) {
    this.ricetteService.dammiRicetteSalvate().subscribe((data) => {
      this.ricette = data;
    });
  }
  handleCardClick(ricetta: Ricetta) {
    this.router.navigate(['/ricette_id', ricetta.codice]);
  }
}

