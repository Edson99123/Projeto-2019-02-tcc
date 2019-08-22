import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManicurePage } from './manicure.page';

describe('ManicurePage', () => {
  let component: ManicurePage;
  let fixture: ComponentFixture<ManicurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManicurePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManicurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
