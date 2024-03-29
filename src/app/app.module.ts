import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { getApp, initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { AreaPersonaleComponent } from './area-personale/area-personale.component';
import { FormNuovaRicettaComponent } from './form-nuova-ricetta/form-nuova-ricetta.component';
import { RicetteComponent } from './ricette/ricette.component';
import { RicetteScritteDaTeComponent } from './ricette-scritte-da-te/ricette-scritte-da-te.component';
import { DettagliRicettaComponent } from './dettagli-ricetta/dettagli-ricetta.component';
import { RicetteProposteComponent } from './ricette-proposte/ricette-proposte.component';
import { DettagliRicettaPropostaComponent } from './dettagli-ricetta-proposta/dettagli-ricetta-proposta.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { RicetteCategoriaComponent } from './ricette-categoria/ricette-categoria.component';
import { RicetteSalvateComponent } from './ricette-salvate/ricette-salvate.component';
import { RicetteNomeComponent } from './ricette-nome/ricette-nome.component';

const firebaseConfig = {
  apiKey: "AIzaSyAuYufQJDxCa1qegd4XeifjVTAIAt5sPsU",
  authDomain: "webapplication-45662.firebaseapp.com",
  projectId: "webapplication-45662",
  storageBucket: "webapplication-45662.appspot.com",
  messagingSenderId: "1038539550360",
  appId: "1:1038539550360:web:c1eef24e5a43817d7eaaed",
  measurementId: "G-5MZ1W6YDMZ"
};


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    AreaPersonaleComponent,
    RicetteComponent,
    FormNuovaRicettaComponent,
    RicetteScritteDaTeComponent,
    DettagliRicettaComponent,
    RicetteProposteComponent,
    DettagliRicettaPropostaComponent,
    ChiSiamoComponent,
    RicetteCategoriaComponent,
    RicetteSalvateComponent,
    RicetteNomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
    

  ],
  providers: [
    provideClientHydration(),
   
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
