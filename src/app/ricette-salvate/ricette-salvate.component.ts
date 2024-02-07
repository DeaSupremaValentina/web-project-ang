import { Component } from '@angular/core';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricetta } from '../model/ricetta';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-ricette-salvate',
  templateUrl: './ricette-salvate.component.html',
  styleUrl: '../app.component.css'
})
export class RicetteSalvateComponent {
  ricette: any;
  constructor(private ricetteService: RicetteServiceService, private router: Router, private auth: AngularFireAuth) {
    this.ricetteService.dammiInfoRicette().subscribe((data) => {
      this.ricette = data;
    });
  }
  handleCardClick(ricetta: Ricetta) {
    this.router.navigate(['/ricette_id', ricetta.codice]);
  }
}

