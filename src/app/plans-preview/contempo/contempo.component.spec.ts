import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContempoComponent } from './contempo.component';

describe('ContempoComponent', () => {
  let component: ContempoComponent;
  let fixture: ComponentFixture<ContempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
