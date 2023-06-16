import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanContempoComponent } from './plan-contempo.component';

describe('PlanContempoComponent', () => {
  let component: PlanContempoComponent;
  let fixture: ComponentFixture<PlanContempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanContempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanContempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
