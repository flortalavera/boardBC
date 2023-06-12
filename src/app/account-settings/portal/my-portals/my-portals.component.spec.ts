import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortalsComponent } from './my-portals.component';

describe('MyPortalsComponent', () => {
  let component: MyPortalsComponent;
  let fixture: ComponentFixture<MyPortalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPortalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPortalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
