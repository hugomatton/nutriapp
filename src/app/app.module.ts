import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupPlanificationComponent } from './vues/agenda/popup-planification/popup-planification.component';
import { ConsultationComponent } from './vues/agenda/consultation/consultation.component';
import { ListePatientsComponent } from './vues/patients/liste-patients/liste-patients.component';
import { InfoPatientsComponent } from './vues/patients/info-patients/info-patients.component';
import { ConnexionUserComponent } from './vues/authentification/connexion-user/connexion-user.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupPlanificationComponent,
    ConsultationComponent,
    ListePatientsComponent,
    InfoPatientsComponent,
    ConnexionUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
