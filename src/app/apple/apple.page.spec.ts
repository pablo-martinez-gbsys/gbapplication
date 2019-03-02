import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplePage } from './apple.page';

describe('ApplePage', () => {
  let component: ApplePage;
  let fixture: ComponentFixture<ApplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
