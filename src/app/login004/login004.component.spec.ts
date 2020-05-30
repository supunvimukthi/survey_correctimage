import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login004Component } from './login004.component';

describe('Login004Component', () => {
  let component: Login004Component;
  let fixture: ComponentFixture<Login004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
