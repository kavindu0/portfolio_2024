import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAdvanceContComponent } from './css-advance-cont.component';

describe('CssAdvanceContComponent', () => {
  let component: CssAdvanceContComponent;
  let fixture: ComponentFixture<CssAdvanceContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssAdvanceContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssAdvanceContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
