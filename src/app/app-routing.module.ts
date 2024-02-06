import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';  // Aggiorna il percorso del componente
import { AreaPersonaleComponent } from './area-personale/area-personale.component';
import { RicetteComponent } from './ricette/ricette.component';
import { RicetteScritteDaTeComponent } from './ricette-scritte-da-te/ricette-scritte-da-te.component';
import { DettagliRicettaComponent } from './dettagli-ricetta/dettagli-ricetta.component';
import { FormNuovaRicettaComponent } from './form-nuova-ricetta/form-nuova-ricetta.component';
import { RicetteProposteComponent } from './ricette-proposte/ricette-proposte.component';
import { DettagliRicettaPropostaComponent } from './dettagli-ricetta-proposta/dettagli-ricetta-proposta.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { RicetteCategoriaComponent } from './ricette-categoria/ricette-categoria.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomePageComponent },  // Aggiorna il nome del componente
  { path: 'area-personale', component: AreaPersonaleComponent },
  { path: 'ricette', component: RicetteComponent },
  { path: 'ricette-scritte-da-te', component: RicetteScritteDaTeComponent },
  { path: 'ricette_id/:id', component: DettagliRicettaComponent },
  { path: 'form-nuova-ricetta', component: FormNuovaRicettaComponent },
  { path: 'ricette-proposte', component: RicetteProposteComponent },
  { path: 'ricetteproposte_id/:id', component: DettagliRicettaPropostaComponent },
  { path: 'chi_siamo', component: ChiSiamoComponent },
  { path: 'ricette_categoria/:categoria', component: RicetteCategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
