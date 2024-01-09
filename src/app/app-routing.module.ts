import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';  // Aggiorna il percorso del componente
import { AreaPersonaleComponent } from './area-personale/area-personale.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },  // Aggiorna il nome del componente
  { path: 'area-personale', component: AreaPersonaleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
