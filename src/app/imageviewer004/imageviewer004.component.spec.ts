import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imageviewer004Component } from './imageviewer004.component';

describe('Imageviewer004Component', () => {
  let component: Imageviewer004Component;
  let fixture: ComponentFixture<Imageviewer004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imageviewer004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imageviewer004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
