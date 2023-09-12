import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupPlanificationComponent } from './vues/agenda/popup-planification/popup-planification.component';
import { ConsultationComponent } from './vues/agenda/consultation/consultation.component';
import { ListePatientsComponent } from './vues/patients/liste-patients/liste-patients.component';
import { InfoPatientsComponent } from './vues/patients/info-patients/info-patients.component';
import { PatientsComponent } from './vues/patients/patients.component';
import { HeaderComponent } from './header/header.component';
import { AgendaComponent } from './vues/agenda/agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupPlanificationComponent,
    ConsultationComponent,
    ListePatientsComponent,
    InfoPatientsComponent,
    PatientsComponent,
    HeaderComponent,
    AgendaComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
