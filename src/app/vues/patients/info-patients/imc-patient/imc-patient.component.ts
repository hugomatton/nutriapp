import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ObservationService } from 'src/app/services/observations.service';
import { PatientService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-imc-patient',
  templateUrl: './imc-patient.component.html',
  styleUrls: ['./imc-patient.component.css']
})
export class ImcPatientComponent implements OnInit {

  observations : any[] = []

  idObs : any[] = []

  constructor(
    private route: ActivatedRoute,
    private observationService: ObservationService
  ){}

  ngOnInit(): void {
    let idPatient: number;
    
    this.observationService.deleteObservationById("6500221d7a32ea0019094591")
    this.route.params.subscribe((param: Params) => {
      idPatient = param['id'];
      if(idPatient){
        this.observationService.getObservationsByPatientId(idPatient.toString())
                              .subscribe((res : any [])=>{
                                console.log(res)
                              })
      }
    });
  }




}
