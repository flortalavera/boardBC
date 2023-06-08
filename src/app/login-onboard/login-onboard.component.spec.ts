import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOnboardComponent } from './login-onboard.component';

describe('LoginOnboardComponent', () => {
  let component: LoginOnboardComponent;
  let fixture: ComponentFixture<LoginOnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOnboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
