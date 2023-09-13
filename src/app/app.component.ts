import { Component, OnInit } from '@angular/core';
import { ObservationService } from './services/observations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NutriApp';

  constructor(private observationService : ObservationService){}

  ngOnInit(){
    this.observationService.getObservationById("650014107a32ea001909458f").subscribe((res : any)=>{console.log(res)})
  }
}