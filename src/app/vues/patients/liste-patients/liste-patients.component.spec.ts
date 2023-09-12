import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientsComponent } from './liste-patients.component';

describe('ListePatientsComponent', () => {
  let component: ListePatientsComponent;
  let fixture: ComponentFixture<ListePatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePatientsComponent]
    });
    fixture = TestBed.createComponent(ListePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
