import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssVarContComponent } from './css-var-cont.component';

describe('CssVarContComponent', () => {
  let component: CssVarContComponent;
  let fixture: ComponentFixture<CssVarContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssVarContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssVarContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
