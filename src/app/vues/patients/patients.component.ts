import { Component } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent {

  patient : any

  onSelectPatient( patient : any){
    this.patient = patient
  }

}
