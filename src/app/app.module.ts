import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProjetComponent } from './projet/projet.component';
import { CalculatriceComponent } from './projet/calculatrice/calculatrice.component';
import { ProjetHomeComponent } from './projet/projet-home/projet-home.component';
import { PianoComponent } from './projet/piano/piano.component';
import { TaquinComponent } from './projet/taquin/taquin.component';
import { Puissance4Component } from './projet/puissance4/puissance4.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProjetComponent,
    CalculatriceComponent,
    ProjetHomeComponent,
    PianoComponent,
    TaquinComponent,
    Puissance4Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
