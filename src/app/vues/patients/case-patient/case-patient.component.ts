import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-case-patient',
  templateUrl: './case-patient.component.html',
  styleUrls: ['./case-patient.component.css'],
})
export class CasePatientComponent {
  @Input() patient!: any;
  @Input() isActive: boolean = false; // Par défaut, le composant n'est pas actif

  constructor(private router: Router) {}

  consulterFichePatient(idPatient: string) {
    console.log('consulter fiche patient', idPatient);
    this.router.navigateByUrl(`patients/${idPatient}`);
  }
}
