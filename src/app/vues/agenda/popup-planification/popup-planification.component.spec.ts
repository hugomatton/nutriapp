import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPlanificationComponent } from './popup-planification.component';

describe('PopupPlanificationComponent', () => {
  let component: PopupPlanificationComponent;
  let fixture: ComponentFixture<PopupPlanificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupPlanificationComponent]
    });
    fixture = TestBed.createComponent(PopupPlanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
