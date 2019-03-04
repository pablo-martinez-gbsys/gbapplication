import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBusinessNewsPage } from './top-business-news.page';

describe('TopBusinessNewsPage', () => {
  let component: TopBusinessNewsPage;
  let fixture: ComponentFixture<TopBusinessNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBusinessNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBusinessNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
