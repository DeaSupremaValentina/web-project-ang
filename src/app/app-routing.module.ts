import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';  // Aggiorna il percorso del componente
import { AreaPersonaleComponent } from './area-personale/area-personale.component';
import { RicetteComponent } from './ricette/ricette.component';
import { RicetteScritteDaTeComponent } from './ricette-scritte-da-te/ricette-scritte-da-te.component';
import { DettagliRicettaComponent } from './dettagli-ricetta/dettagli-ricetta.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomePageComponent },  // Aggiorna il nome del componente
  { path: 'area-personale', component: AreaPersonaleComponent },
  { path: 'ricette', component: RicetteComponent },
  { path: 'ricette-scritte-da-te', component: RicetteScritteDaTeComponent },
  { path: 'ricette/:nomeRicetta', component: DettagliRicettaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
