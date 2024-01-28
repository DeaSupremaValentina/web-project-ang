import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-nuova-ricetta',
  templateUrl: './form-nuova-ricetta.component.html',
  styleUrl: '../app.component.css'
})
export class FormNuovaRicettaComponent {
  ricettaForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.ricettaForm = this.fb.group({
      nomeRicetta: ['', Validators.required],
      categoria: ['', Validators.required],
      descrizione: ['', Validators.required],
      ingredienti: ['', Validators.required],
      procedimento: ['', Validators.required],
      tempoPreparazione: [''],
      numeroPersone: [''],
      difficolta: [''],
      costo: [''],
      linkYoutube: [''],
      linkSpotify: [''],
      pathImmagine: [''],
      autore: [''],
      tag1: [''],
      tag2: ['']
    });
  }

  inviaRicetta(){
    if(this.ricettaForm.valid){
      
      this.http.post('http://localhost:8080/utente/propostaRicetta', this.ricettaForm.value).subscribe((response) => {
        console.log(response);
      });
    }
  }

  

}
