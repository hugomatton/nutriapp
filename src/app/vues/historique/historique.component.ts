import { Component } from '@angular/core';
import { NutriOrder, NutriorderService } from 'src/app/services/nutriOrderPatient.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
  plans: any[] = [];

  constructor(private nutriOrderService: NutriorderService) { }

  ngOnInit(): void {
    let ordererReference:string='Practitioner/6500565d7a32ea00190945ad';
    // Récupérer les plans nutritionnels avec la première requête
    this.nutriOrderService.getNutriOrdersByOrderer(ordererReference).subscribe((data: NutriOrder[] )  => {
      this.plans = data;
    });

    for (let plan of this.plans) {
      let patientReference = plan.patient.reference;
      this.nutriOrderService.getPatientDataByReference(patientReference).subscribe(patientData => {
        // Vous pouvez accéder aux données du patient ici, par exemple, patientData.display
        // Assurez-vous de stocker ces données dans le modèle approprié pour les afficher dans le tableau
        plan.patientData = patientData; 
      });
    }
  }
}
