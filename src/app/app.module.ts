import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePatientsComponent } from './vues/patients/liste-patients/liste-patients.component';
import { InfoPatientsComponent } from './vues/patients/info-patients/info-patients.component';
import { PatientsComponent } from './vues/patients/patients.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoriqueComponent } from './vues/historique/historique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { ListboxModule } from 'primeng/listbox';
import { CasePatientComponent } from './vues/patients/case-patient/case-patient.component';
import { PatientDetailsComponent } from './vues/patients/info-patients/patient-details/patient-details.component';
import { PlanNutritionnelComponent } from './vues/patients/info-patients/plan-nutritionnel/plan-nutritionnel.component';

@NgModule({
  declarations: [
    AppComponent,
    ListePatientsComponent,
    InfoPatientsComponent,
    PatientsComponent,
    HeaderComponent,
    HistoriqueComponent,
    CasePatientComponent,
    PatientDetailsComponent,
    PlanNutritionnelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    TabMenuModule,
    HttpClientModule,
    ListboxModule,
    CardModule,
    InputTextareaModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
