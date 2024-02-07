import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricetta } from '../model/ricetta';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dettagli-ricetta',
  templateUrl: './dettagli-ricetta.component.html',
  styleUrls: ['./dettagli-ricetta.component.css']
})
export class DettagliRicettaComponent implements OnInit {
  idRicetta: any;
  ricetta: Ricetta | undefined;
  youtubeUrl: SafeResourceUrl | undefined;
  spotifyUrl: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private ricetteService: RicetteServiceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idRicetta = params['id'];
      this.loadRicettaDetails();
    });
  }

  loadRicettaDetails() {
    this.ricetteService.getRicettaByID(this.idRicetta).subscribe(
      (data: Ricetta) => {
        this.ricetta = data;
        this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.ricetta.linkYoutube);
        this.spotifyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.ricetta.linkSpotify);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
