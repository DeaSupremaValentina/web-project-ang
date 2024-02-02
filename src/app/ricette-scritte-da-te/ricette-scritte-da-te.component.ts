import { Component } from '@angular/core';
import { RicetteServiceService } from '../ricette-service.service';
import { Ricetta } from '../model/ricetta';

@Component({
  selector: 'app-ricette-scritte-da-te',
  templateUrl: './ricette-scritte-da-te.component.html',
  styleUrl: './ricette-scritte-da-te.component.css'
})
export class RicetteScritteDaTeComponent {
  mieRicette: any;
  constructor(private ricetteService: RicetteServiceService) {
    this.ricetteService.dammiRicetteScritteDaUtente().subscribe((data) => {
      this.mieRicette = data;
      console.log(this.mieRicette); 
    });
  }
  handleCardClick(miaRicetta: Ricetta) {
    // Puoi implementare qui la logica per gestire il clic sulla card
    // Ad esempio, puoi reindirizzare l'utente a una pagina dettaglio della ricetta
    console.log('Card cliccata:', miaRicetta);
    // Aggiungi qui la tua logica per gestire il clic sulla card
  }

}
