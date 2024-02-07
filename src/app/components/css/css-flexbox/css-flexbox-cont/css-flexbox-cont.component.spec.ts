import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFlexboxContComponent } from './css-flexbox-cont.component';

describe('CssFlexboxContComponent', () => {
  let component: CssFlexboxContComponent;
  let fixture: ComponentFixture<CssFlexboxContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssFlexboxContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssFlexboxContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
