import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  idPatientSelected: string = '';
  constructor(private http: HttpClient) {}

  getPatients(): Observable<any[]> {
    return this.http.get<any[]>('https://fhir.alliance4u.io/api/patient');
  }

  getPatientById(idPatient: number): any {
    return this.http.get<any[]>(
      `https://fhir.alliance4u.io/api/patient/${idPatient}`
    );
  }
}
