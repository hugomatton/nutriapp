import { Component } from '@angular/core';
import { NutriOrder, NutriorderService } from 'src/app/services/nutriOrderPatient.service';
import { PatientService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
  plans: any[] = [];
  plansWithPatients: any[] = []

  constructor(
    private nutriOrderService: NutriorderService,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    let ordererReference: string = 'Practitioner/6500565d7a32ea00190945ad';
    // Récupérer les plans nutritionnels avec la première requête
    this.nutriOrderService.getNutriOrdersByOrderer(ordererReference).subscribe((data: NutriOrder[]) => {
      this.plans = data;
      for (let plan of data) {
        let patientReference = plan.patient.reference;
        var idPatient = patientReference.replace("Patient/", "")
        this.patientService.getPatientById(idPatient)
          .subscribe((res: any) => {
            this.plansWithPatients.push(
              {
                patient: res,
                plan: plan
              }
            )
          })
      }
    });

  }
}
