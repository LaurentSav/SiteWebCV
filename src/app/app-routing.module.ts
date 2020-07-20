import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetComponent } from './projet/projet.component';
import { CalculatriceComponent } from './projet/calculatrice/calculatrice.component';
import { ProjetHomeComponent } from './projet/projet-home/projet-home.component';
import { PianoComponent } from './projet/piano/piano.component';
import { TaquinComponent } from './projet/taquin/taquin.component';
import { Puissance4Component } from './projet/puissance4/puissance4.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Projet', component: ProjetComponent,
    children: [
      {
        path: '',
        component: ProjetHomeComponent
      },
      {
        path: 'Calculatrice',
        component: CalculatriceComponent
      },
      {
        path: 'Piano',
        component: PianoComponent
      },
      {
        path: 'Taquin',
        component: TaquinComponent
      },
      {
        path: 'Puissance4',
        component: Puissance4Component
      }
    ]

  },
  { path: 'Contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
