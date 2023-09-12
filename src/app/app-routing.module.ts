import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PatientsComponent } from './vues/patients/patients.component';
import { InfoPatientsComponent } from './vues/patients/info-patients/info-patients.component';
import { ConnexionUserComponent } from './vues/authentification/connexion-user/connexion-user.component';
import { AgendaComponent } from './vues/agenda/agenda.component';

const routes: Route[] = [
  { path: '', component: ConnexionUserComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'agenda', component: AgendaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
