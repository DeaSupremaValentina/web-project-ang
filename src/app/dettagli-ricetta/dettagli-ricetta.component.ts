import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dettagli-ricetta',
  templateUrl: './dettagli-ricetta.component.html',
  styleUrl: './dettagli-ricetta.component.css'
})
export class DettagliRicettaComponent {

  constructor(private route: ActivatedRoute) {}
  //DA SISTEMARE IN MODO CHE PRENDA IL NOME DELLA RICETTA
  ngOnInit() {
    this.route.params.subscribe(params => {
      const nomeRicetta = params['nomeRicetta'];
      console.log(nomeRicetta);
    });
  }
}