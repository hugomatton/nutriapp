import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPatientsComponent } from './info-patients.component';

describe('InfoPatientsComponent', () => {
  let component: InfoPatientsComponent;
  let fixture: ComponentFixture<InfoPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPatientsComponent]
    });
    fixture = TestBed.createComponent(InfoPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
