import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login003Component } from './login003.component';

describe('Login003Component', () => {
  let component: Login003Component;
  let fixture: ComponentFixture<Login003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
