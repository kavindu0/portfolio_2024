import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssVsScssComponent } from './css-vs-scss.component';

describe('CssVsScssComponent', () => {
  let component: CssVsScssComponent;
  let fixture: ComponentFixture<CssVsScssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssVsScssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssVsScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
