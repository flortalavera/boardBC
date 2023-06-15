import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPracticalComponent } from './plan-practical.component';

describe('PlanPracticalComponent', () => {
  let component: PlanPracticalComponent;
  let fixture: ComponentFixture<PlanPracticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPracticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanPracticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
