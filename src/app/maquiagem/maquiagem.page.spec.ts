import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquiagemPage } from './maquiagem.page';

describe('MaquiagemPage', () => {
  let component: MaquiagemPage;
  let fixture: ComponentFixture<MaquiagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquiagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquiagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
