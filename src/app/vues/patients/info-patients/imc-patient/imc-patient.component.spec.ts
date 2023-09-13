import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcPatientComponent } from './imc-patient.component';

describe('ImcPatientComponent', () => {
  let component: ImcPatientComponent;
  let fixture: ComponentFixture<ImcPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImcPatientComponent]
    });
    fixture = TestBed.createComponent(ImcPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
