import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PatientService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css'],
})
export class ListePatientsComponent implements OnInit {
  patients: any[] = [];
  patientsToDisplay: any[] = []
  listePatientsNoms: any[] = [];
  idPatientSelected!: any;
  activePatientId: number | null = null;

  searchValue: string = ''

  @Output() selectPatient = new EventEmitter<any>();

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((res) => {
      this.patients = res;
      this.patientsToDisplay = res;
    });
  }

  setActivePatient(patientId: number) {
    this.activePatientId = patientId;
  }

  onSearchValueChange(event : any){
    this.patientsToDisplay = this.patients.filter((patient)=>{
      return patient.name[0].family.toLowerCase().includes(event.toLowerCase())
    })
  }
}
