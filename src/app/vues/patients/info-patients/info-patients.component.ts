import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PatientService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-info-patients',
  templateUrl: './info-patients.component.html',
  styleUrls: ['./info-patients.component.css'],
})
export class InfoPatientsComponent implements OnInit {
  patient: any;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {
    console.log('construct info patient');
  }

  ngOnInit(): void {
    let idPatient: number;
    //récupérer l'id du facesnap qu'on veut afficher
    this.route.params.subscribe((param: Params) => {
      idPatient = param['id'];
      this.patientService.getPatientById(idPatient).subscribe((res: any) => {
        this.patient = res;
      });
    });
  }
}
