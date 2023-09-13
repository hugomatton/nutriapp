import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphImcComponent } from './graph-imc.component';

describe('GraphImcComponent', () => {
  let component: GraphImcComponent;
  let fixture: ComponentFixture<GraphImcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphImcComponent]
    });
    fixture = TestBed.createComponent(GraphImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
