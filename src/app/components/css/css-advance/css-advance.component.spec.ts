import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAdvanceComponent } from './css-advance.component';

describe('CssAdvanceComponent', () => {
  let component: CssAdvanceComponent;
  let fixture: ComponentFixture<CssAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssAdvanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
