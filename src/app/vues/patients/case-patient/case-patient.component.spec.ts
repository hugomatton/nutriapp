import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePatientComponent } from './case-patient.component';

describe('CasePatientComponent', () => {
  let component: CasePatientComponent;
  let fixture: ComponentFixture<CasePatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasePatientComponent]
    });
    fixture = TestBed.createComponent(CasePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
