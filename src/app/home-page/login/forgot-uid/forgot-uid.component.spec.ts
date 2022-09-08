import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotUIDComponent } from './forgot-uid.component';

describe('ForgotUIDComponent', () => {
  let component: ForgotUIDComponent;
  let fixture: ComponentFixture<ForgotUIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotUIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotUIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
