import { Component } from '@angular/core';
import { RicetteServiceService } from '../ricette-service.service';
import { Ricetta } from '../model/ricetta';
@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrl: './ricette.component.css'
})
export class RicetteComponent {
  ricette: any;
  constructor(private ricetteService: RicetteServiceService) {
    this.ricetteService.dammiInfoRicette().subscribe((data) => {
      this.ricette = data;
      console.log(this.ricette); 
    });
  }
  handleCardClick(ricetta: Ricetta) {
    // Puoi implementare qui la logica per gestire il clic sulla card
    // Ad esempio, puoi reindirizzare l'utente a una pagina dettaglio della ricetta
    console.log('Card cliccata:', ricetta);
    // Aggiungi qui la tua logica per gestire il clic sulla card
  }
}
