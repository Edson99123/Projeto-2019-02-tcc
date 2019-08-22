import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirurePage } from './pedirure.page';

describe('PedirurePage', () => {
  let component: PedirurePage;
  let fixture: ComponentFixture<PedirurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedirurePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
