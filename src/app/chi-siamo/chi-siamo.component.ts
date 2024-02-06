import { Component, OnInit } from '@angular/core';
import { ChiSiamoService } from '../services/chi-siamo.service'; 

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.css']
})
export class ChiSiamoComponent implements OnInit{

  htmlContent: string = '';

  constructor(private chiSiamoService: ChiSiamoService) {}

  ngOnInit(): void {
    this.chiSiamoService.backendCall().subscribe(
      (response: string) => {
        this.htmlContent = response;
      },
      (error) => {
        console.error('Si è verificato un errore durante la richiesta al backend:', error);
      }
    );
  }
}

