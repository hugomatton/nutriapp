import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PatientsComponent } from './vues/patients/patients.component';
import { InfoPatientsComponent } from './vues/patients/info-patients/info-patients.component';
import { HistoriqueComponent } from './vues/historique/historique.component';
import { AccueilComponent } from './vues/accueil/accueil.component';

const routes: Route[] = [
  {
    path: 'patients',
    component: PatientsComponent,
    children: [{ path: ':id', component: InfoPatientsComponent }],
  },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'accueil', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
