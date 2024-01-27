import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';  // Aggiorna il percorso del componente
import { AreaPersonaleComponent } from './area-personale/area-personale.component';
import { RicettaComponent } from './ricetta/ricetta.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomePageComponent },  // Aggiorna il nome del componente
  { path: 'area-personale', component: AreaPersonaleComponent },
  { path: 'ricetta', component: RicettaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
