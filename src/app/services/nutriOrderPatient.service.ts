import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export interface NutriOrder {
    status: string;
    patient: string; // ID du patient
    dateTime: string;
    orderer: string; // ID du médecin
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
        instruction: string; // L'instruction du formulaire
    };
}
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