import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RicetteServiceService } from '../ricette-service.service';
import { Ricetta } from '../model/ricetta';

@Component({
  selector: 'app-ricette-categoria',
  templateUrl: './ricette-categoria.component.html',
  styleUrls: ['./ricette-categoria.component.css']
})
export class RicetteCategoriaComponent implements OnInit {
  ricette: any;
  categoria!: string;

constructor(
  private ricetteService: RicetteServiceService,
  private router: Router,
  private route: ActivatedRoute
  ) {}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.categoria = params['categoria'];
    this.ricetteService.dammiInfoRicetteByCategoria(this.categoria).subscribe((data) => {
      this.ricette = data;
    });
  });
}

handleCardClick(ricetta: Ricetta) {
  this.router.navigate(['/ricette_id', ricetta.codice]);
  }
}
