import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ObservationService } from 'src/app/services/observations.service';
import { PatientService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent {
  patient: any;
  taille: any;
  poids: any;
  imc: any;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private observationService: ObservationService
  ) {
  }

  ngOnInit(): void {
    let idPatient: number;
    //récupérer l'id du facesnap qu'on veut afficher
    this.route.params.subscribe((param: Params) => {
      this.taille = '-'
      this.poids = '-'
      idPatient = param['id'];
      this.patientService.getPatientById(idPatient).subscribe((res: any) => {
        this.patient = res;
        this.observationService.getObservationsByPatientId(idPatient.toString())
                               .subscribe((mesures)=>{
                                console.log('appel du service dans patient detail',mesures)
                                  this.taille = mesures[mesures.length - 1].taille
                                  this.poids = mesures[mesures.length - 1].poids
                                  this.imc = this.poids / (this.taille/100 * this.taille/100)
                               })
      });
    });
  }
}
