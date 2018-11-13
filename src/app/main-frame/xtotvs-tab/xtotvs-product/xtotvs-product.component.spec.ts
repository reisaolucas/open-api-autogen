import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtotvsProductComponent } from './xtotvs-product.component';

describe('XtotvsProductComponent', () => {
  let component: XtotvsProductComponent;
  let fixture: ComponentFixture<XtotvsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtotvsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtotvsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
