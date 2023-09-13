import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CardModule } from 'primeng/card';

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

@NgModule({
  declarations: [
    AppComponent,
    ListePatientsComponent,
    InfoPatientsComponent,
    PatientsComponent,
    HeaderComponent,
    HistoriqueComponent,
    CasePatientComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
