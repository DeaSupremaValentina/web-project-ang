import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricetta } from '../model/ricetta';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

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
  commentoNuovo: string = "";

  constructor(
    private route: ActivatedRoute,
    private ricetteService: RicetteServiceService,
    private sanitizer: DomSanitizer,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idRicetta = params['id'];
      this.controlloSalvataggio();
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
      this.bottone="Salva ricetta";
    }
    else{
      
      this.bottone="Elimina ricetta salvata";
    }
  }

  salvaRicetta() {
    if(this.authService.isUserLogged()==false){
      this.showLoginAlert();
    }
    else {
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
}
  commentiRicetta(){
    if(this.ricetta?.commenti.length==0){
      this.commenti="Non ci sono ancora commenti... *verso delle cicale*";
    }
    else{
      this.commenti="Commenti: ";
    }
  }
  controlloSalvataggio(){
    this.ricetteService.dammiRicetteSalvate().subscribe(
      (data: Ricetta[]) => {
        for(let i=0;i<data.length;i++){
          if(data[i].codice==this.idRicetta){
            this.ricettaGiaSalvata=true;
          }
        }
        this.titoloBottone();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUserStatus(){
    return this.authService.isUserLogged();
  }

  showLoginAlert() {
    alert("Devi effettuare il login prima di poter salvare una ricetta.");
  }
  salvaCommento(){
    if(this.authService.isUserLogged()==false){
      alert("Devi effettuare il login prima di poter commentare.");
    }
    else{
      if(this.commentoNuovo.trim()!==''){ //se il commento non è vuoto
        if(this.ricetta){ //se la ricetta non è undefined
          this.ricetteService.salvaCommento(this.ricetta,this.commentoNuovo).subscribe(
            (data) => {
              console.log(data);
            },
            (error) => {
              console.error(error);
            }
          );
          //stampa il nuovo commento
          
        }
      }
    }
  }
}

