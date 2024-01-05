import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';  // Aggiorna il percorso del componente

const routes: Routes = [
  { path: '', component: HomePageComponent },  // Aggiorna il nome del componente
  // Aggiungi altre rotte qui se necessario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
