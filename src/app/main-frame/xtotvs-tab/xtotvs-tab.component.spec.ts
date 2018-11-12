import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtotvsTabComponent } from './xtotvs-tab.component';

describe('XtotvsTabComponent', () => {
  let component: XtotvsTabComponent;
  let fixture: ComponentFixture<XtotvsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtotvsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtotvsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
