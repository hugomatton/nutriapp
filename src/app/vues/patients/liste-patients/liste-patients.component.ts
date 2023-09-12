import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PatientService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css']
})
export class ListePatientsComponent implements OnInit{

  patients : any[] = []
  @Output() selectPatient = new EventEmitter<any>()

  constructor ( private patientService : PatientService){}

  ngOnInit(): void {
    this.patientService
            .getPatients()
            .subscribe((res)=>{
                          this.patients = res
                          console.log(res[1])
                        })
  }

  onSelectPatient( patient : any){
    this.selectPatient.emit(patient)
  }




}
