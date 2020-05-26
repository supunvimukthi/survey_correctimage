import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login002Component } from './login002.component';

describe('Login002Component', () => {
  let component: Login002Component;
  let fixture: ComponentFixture<Login002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
