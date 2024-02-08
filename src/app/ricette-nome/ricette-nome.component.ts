import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricetta } from '../model/ricetta';

@Component({
  selector: 'app-ricette-nome',
  templateUrl: './ricette-nome.component.html',
  styleUrl: './ricette-nome.component.css'
})
export class RicetteNomeComponent {
  ricette: any;
  nome!: string;

constructor(
  private ricetteService: RicetteServiceService,
  private router: Router,
  private route: ActivatedRoute
  ) {}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.nome = params['searchQuery'];
    this.ricetteService.searchRicetteByNome(this.nome).subscribe((data) => {
      this.ricette = data;
    });
  });
}

handleCardClick(ricetta: Ricetta) {
  this.router.navigate(['/ricette_id', ricetta.codice]);
  }
}


