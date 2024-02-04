import { Component, OnInit } from '@angular/core';
import { ChiSiamoService } from '../services/chi-siamo.service'; // Importa il servizio per ottenere i dati "Chi Siamo"

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.css']
})
export class ChiSiamoComponent implements OnInit {
  chiSiamoData: any; // Dichiarazione della variabile per contenere i dati "Chi Siamo"

  constructor(private chiSiamoService: ChiSiamoService) {}

  ngOnInit(): void {
    this.getChiSiamoData();
  }

  getChiSiamoData(): void {
    this.chiSiamoService.getChiSiamoData()
      .subscribe(data => {
        this.chiSiamoData = data;
      });
  }
}
