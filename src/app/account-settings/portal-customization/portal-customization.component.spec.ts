import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalCustomizationComponent } from './portal-customization.component';

describe('PortalCustomizationComponent', () => {
  let component: PortalCustomizationComponent;
  let fixture: ComponentFixture<PortalCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalCustomizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
