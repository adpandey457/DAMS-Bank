import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserIdPasswordComponent } from './change-user-id-password.component';

describe('ChangeUserIdPasswordComponent', () => {
  let component: ChangeUserIdPasswordComponent;
  let fixture: ComponentFixture<ChangeUserIdPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeUserIdPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeUserIdPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
