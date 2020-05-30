import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login005Component } from './login005.component';

describe('Login005Component', () => {
  let component: Login005Component;
  let fixture: ComponentFixture<Login005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
