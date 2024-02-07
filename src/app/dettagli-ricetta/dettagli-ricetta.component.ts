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
  ricettaGiaSalvata: boolean = false;
  bottone: string = "Salva Ricetta";
  commenti: string = "Commenti:";

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
        this.commentiRicetta()
      },
      (error) => {
        console.error(error);
      }
    );
  }

  titoloBottone(){
    if(this.ricettaGiaSalvata==false){
      this.bottone="Salva Ricetta";
    }
    else{
      
      this.bottone="Elimina Ricetta Salvata";
    }
  }

  salvaRicetta() {

    if(this.ricettaGiaSalvata==false){
      if (this.ricetta) { //se ricetta non è undefined
        this.ricettaGiaSalvata=true;
        this.ricetteService.salvaRicetta(this.ricetta).subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
    else{
      //la ricetta va tolta dalle ricette salvate
      if (this.ricetta) { //se ricetta non è undefined
        this.ricettaGiaSalvata=false;
        this.ricetteService.eliminaRicettaSalvata(this.ricetta).subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
    this.titoloBottone();
  }
  commentiRicetta(){
    if(this.ricetta?.commenti.length==0){
      this.commenti="Non ci sono ancora commenti... *verso delle cicale*";
    }
    else{
      this.commenti="Commenti: ";
    }
  }
}
