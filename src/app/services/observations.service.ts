import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  constructor(private http: HttpClient) { }

  getObservationsByPatientId(patientId:string): Observable<any[]> {
    return this.http.get<any[]>(`https://fhir.alliance4u.io/api/observation?subject.reference=Patient/${patientId}`)
                    .pipe(
                      map((res)=>{
                        let mesuresPatient = []
                        for( let obs of res ){
                          let poid
                          let taille
                          let alreadyIn = false
                          //si l'observation est une taille
                          if(res[0].valueQuantity.unit === 'cm'){
                            taille = res[0].valueQuantity.value
                            //on cherche le poid correspondant
                            for( let obs2 of res){
                              if(obs.effectiveDateTime === obs2.effectiveDateTime){
                                for(let mesure of mesuresPatient){
                                  if(mesure.date === obs.effectiveDateTime){
                                    alreadyIn = true
                                  }
                                }
                                if(!alreadyIn){
                                  mesuresPatient.push({taille: taille, poid: obs2.valueQuantity.value, date: obs.effectiveDateTime})
                                }
                              }
                            }

                          }
                          //si l'observation est un poids 
                          if(res[0].valueQuantity.unit === 'kg'){
                            poid = res[0].valueQuantity.value
                            //on cherche la taille correspondante
                            for( let obs2 of res){
                              if(obs.effectiveDateTime === obs2.effectiveDateTime){
                                //on regarde si la date n'est pas déjà présente dans le tableau
                                for(let mesure of mesuresPatient){
                                  if(mesure.date === obs.effectiveDateTime){
                                    alreadyIn = true
                                  }
                                }
                                if(!alreadyIn){
                                  mesuresPatient.push({taille: obs2.valueQuantity.value, poid: poid, date: obs.effectiveDateTime})
                                }
                              }
                            }
                          }
                        }                        
                        return mesuresPatient 
                      })
                    )
  }

  deleteObservationById(obsId:string): any {
    return this.http.delete(`https://fhir.alliance4u.io/api/observation/${obsId}`)
  }


}
