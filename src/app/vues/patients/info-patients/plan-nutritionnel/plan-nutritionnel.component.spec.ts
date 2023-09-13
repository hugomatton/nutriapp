import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanNutritionnelComponent } from './plan-nutritionnel.component';

describe('PlanNutritionnelComponent', () => {
  let component: PlanNutritionnelComponent;
  let fixture: ComponentFixture<PlanNutritionnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanNutritionnelComponent]
    });
    fixture = TestBed.createComponent(PlanNutritionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
