import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePatientsComponent } from './vues/patients/liste-patients/liste-patients.component';
import { InfoPatientsComponent } from './vues/patients/info-patients/info-patients.component';
import { PatientsComponent } from './vues/patients/patients.component';
import { HeaderComponent } from './header/header.component';
import { HistoriqueComponent } from './vues/historique/historique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    ListePatientsComponent,
    InfoPatientsComponent,
    PatientsComponent,
    HeaderComponent,
    HistoriqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
