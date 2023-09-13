import { Component } from '@angular/core';
import { NutriorderService, NutriOrder } from '../../../../services/nutriOrderPatient.service';

@Component({
  selector: 'app-plan-nutritionnel',
  templateUrl: './plan-nutritionnel.component.html',
  styleUrls: ['./plan-nutritionnel.component.css']
})

export class PlanNutritionnelComponent {
  formValue: any = {};

  constructor(private nutritionOrderService: NutriorderService) {}

  onSubmit(): void {
    console.log('on est dans le submit')
    const instruction = this.formValue.instruction;

    const newNutriOrder: NutriOrder = {
      resourceType: 'NutritionOrder',
      status: 'active',
      patient: {reference: 'Patient/650014107a32ea001909458f'},
      dateTime: new Date(),
      orderer: {reference:'Practitioner/6500565d7a32ea00190945ad'},
      allergyIntolerance: [
        {
          reference: 'AllergyIntolerance/65006ec2b32fbd001992a007'
        }
      ],
      oralDiet: {
        type: [
          {
            coding: [
              {
                system: 'http://loinc.org',
                code: '81663-7',
                display: 'Diet'
              }
            ]
          }
        ],
        instruction: instruction
      }
    };

    console.log(newNutriOrder);

    this.nutritionOrderService.createNutritionOrder(newNutriOrder).subscribe(
      (response: any) => {
        console.log('NutritionOrder créé avec succès', response);
        this.formValue.instruction = '';
      },
      (error: any) => {
        console.error('Erreur lors de la création du NutritionOrder', error);
      }
    );
  }
}