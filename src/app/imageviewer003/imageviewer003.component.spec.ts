import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imageviewer003Component } from './imageviewer003.component';

describe('Imageviewer003Component', () => {
  let component: Imageviewer003Component;
  let fixture: ComponentFixture<Imageviewer003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imageviewer003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imageviewer003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
