import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PatientService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css'],
})
export class ListePatientsComponent implements OnInit {
  patients: any[] = [];
  listePatientsNoms: any[] = [];
  idPatientSelected!: any;
  activePatientId: number | null = null;
  @Output() selectPatient = new EventEmitter<any>();

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((res) => {
      this.patients = res;
      console.log(res[1]);
      console.log(res);
    });
  }

  setActivePatient(patientId: number) {
    this.activePatientId = patientId;
    console.log();
  }
}
