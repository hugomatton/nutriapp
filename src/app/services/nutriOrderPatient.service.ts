import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NutriOrder {
  resourceType: string;
  status: string;
  patient: {reference:string};
  dateTime: Date;
  orderer: {reference:string};
  allergyIntolerance: {
    reference: string;
  }[];
  oralDiet: {
    type: [
      {
        coding: [
          {
            system: string;
            code: string;
            display: string;
          }
        ];
      }
    ];
    instruction: string;
  };
}

@Injectable({
  providedIn: 'root',
})

export class NutriorderService {
  constructor(private http: HttpClient) {}

  getNutriorderPatientById(patientId: string): Observable<any[]> {
    return this.http.get<any[]>(
      `https://fhir.alliance4u.io/api/nutrition-order?patient.reference=Patient/${patientId}`
    );
  }

  // Méthode pour créer un NutritionOrder
  createNutritionOrder(nutriOrder: NutriOrder): Observable<any> {
    // Effectuez la requête POST pour créer un NutritionOrder
    return this.http.post<any>(
      'https://fhir.alliance4u.io/api/nutrition-order',
      nutriOrder
    );
  }
}