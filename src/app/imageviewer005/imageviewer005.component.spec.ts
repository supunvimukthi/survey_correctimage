import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imageviewer005Component } from './imageviewer005.component';

describe('Imageviewer005Component', () => {
  let component: Imageviewer005Component;
  let fixture: ComponentFixture<Imageviewer005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imageviewer005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imageviewer005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
