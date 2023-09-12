import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-patients',
  templateUrl: './info-patients.component.html',
  styleUrls: ['./info-patients.component.css']
})
export class InfoPatientsComponent {

  @Input() patient : any

}
