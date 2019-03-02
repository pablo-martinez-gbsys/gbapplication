import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCrunchPage } from './tech-crunch.page';

describe('TechCrunchPage', () => {
  let component: TechCrunchPage;
  let fixture: ComponentFixture<TechCrunchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechCrunchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechCrunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
