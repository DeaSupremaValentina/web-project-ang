import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricetta } from '../model/ricetta';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dettagli-ricetta-proposta',
  templateUrl: './dettagli-ricetta-proposta.component.html',
  styleUrl: './dettagli-ricetta-proposta.component.css'
})

export class DettagliRicettaPropostaComponent implements OnInit{

  nomeRicetta: any;
  ricetta: Ricetta | undefined;
  utente: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private ricetteService: RicetteServiceService,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nomeRicetta = params['nome'];
      console.log(this.nomeRicetta);
      this.loadRicettaDetails();
    });
  }

  loadRicettaDetails() {
    this.ricetteService.getRicettaPropostaByNome(this.nomeRicetta).subscribe(
      (data: Ricetta) => {
        this.ricetta = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  accettaProposta() {
    if (this.ricetta) {
      
      this.ricetteService.accettaRicetta(this.ricetta).subscribe(
        (data: Ricetta) => {
          this.ricetta = data;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}
