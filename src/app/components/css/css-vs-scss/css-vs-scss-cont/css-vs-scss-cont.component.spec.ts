import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssVsScssContComponent } from './css-vs-scss-cont.component';

describe('CssVsScssContComponent', () => {
  let component: CssVsScssContComponent;
  let fixture: ComponentFixture<CssVsScssContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssVsScssContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssVsScssContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
