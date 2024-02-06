import { Component } from '@angular/core';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricetta } from '../model/ricetta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ricette-proposte',
  templateUrl: './ricette-proposte.component.html',
  styleUrl: './ricette-proposte.component.css'
})
export class RicetteProposteComponent {
  ricette: any;
  constructor(private ricetteService: RicetteServiceService, private router: Router) {
    this.ricetteService.dammiRicetteProposte().subscribe((data) => {
      this.ricette = data;
      console.log(this.ricette); 
    });
  }
  handleCardClick(ricetta: Ricetta) {
    this.router.navigate(['/ricetteproposte_id', ricetta.codice]);
  }
}
