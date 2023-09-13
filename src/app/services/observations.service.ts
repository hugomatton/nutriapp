import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  constructor(private http: HttpClient) { }

  getObservationById(patientId:string): Observable<any[]> {
    return this.http.get<any[]>(`https://fhir.alliance4u.io/api/observation?subject.reference=Patient/${patientId}`);
  }
  
}
