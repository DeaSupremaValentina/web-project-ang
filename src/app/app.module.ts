import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { getApp, initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { AreaPersonaleComponent } from './area-personale/area-personale.component';
import { FormNuovaRicettaComponent } from './form-nuova-ricetta/form-nuova-ricetta.component';

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
    FormNuovaRicettaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideClientHydration(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
