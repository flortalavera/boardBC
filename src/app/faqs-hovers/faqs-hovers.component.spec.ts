import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQsHoversComponent } from './faqs-hovers.component';

describe('FAQsHoversComponent', () => {
  let component: FAQsHoversComponent;
  let fixture: ComponentFixture<FAQsHoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQsHoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAQsHoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
