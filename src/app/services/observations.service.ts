import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservationService {

  constructor(private http: HttpClient) {}

  getObservationsByPatientId(patientId:string): Observable<any[]> {
    return this.http.get<any[]>(`https://fhir.alliance4u.io/api/observation?subject.reference=Patient/${patientId}`)
                    .pipe(
                      map((observations)=>{
                        let poids = []
                        let tailles = []
                        let mesures = []
                        for(let obs of observations){
                          if(obs.valueQuantity.unit === 'cm'){
                            tailles.push({date :obs.effectiveDateTime, taille: obs.valueQuantity.value, unit:'cm'})
                          }
                          if(obs.valueQuantity.unit === 'kg'){
                            poids.push({date :obs.effectiveDateTime, poids: obs.valueQuantity.value, unit:'kg'})
                          }
                        }
                        for(let p of poids){
                          for (let t of tailles){
                            if(p.date === t.date){
                              mesures.push({taille: t.taille, poids: p.poids, date: p.date})
                            }
                          }
                        }

                        mesures.sort((a, b) => {
                          const dateA = new Date(a.date).getTime();
                          const dateB = new Date(b.date).getTime();
                          return dateA-dateB;
                        })
                        return mesures
                      })
                    )
  }

  deleteObservationById(obsId: string): any {
    return this.http.delete(
      `https://fhir.alliance4u.io/api/observation/${obsId}`
    );
  }
}
