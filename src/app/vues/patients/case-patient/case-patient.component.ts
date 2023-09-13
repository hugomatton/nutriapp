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

  constructor(private router: Router, private patientService: PatientService) {}

  idPatientSelected: string = this.patientService.getPatientSelected();

  consulterFichePatient(idPatient: string) {
    console.log('consulter fiche patient', idPatient);
    this.router.navigateByUrl(`patients/${idPatient}`);

    this.patientService.updatePatientSelected(idPatient);
  }
}
