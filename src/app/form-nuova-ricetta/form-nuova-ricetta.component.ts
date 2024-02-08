import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Ricetta } from '../model/ricetta';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-form-nuova-ricetta',
  templateUrl: './form-nuova-ricetta.component.html',
  styleUrl: '../app.component.css'
})
export class FormNuovaRicettaComponent {
  
  constructor(private http: HttpClient) {}

  maNo(){
    
  }


}


