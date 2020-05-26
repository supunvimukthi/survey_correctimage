import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imageviewer002Component } from './imageviewer002.component';

describe('Imageviewer002Component', () => {
  let component: Imageviewer002Component;
  let fixture: ComponentFixture<Imageviewer002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imageviewer002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imageviewer002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
