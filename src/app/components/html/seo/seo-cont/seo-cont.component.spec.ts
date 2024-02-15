import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoContComponent } from './seo-cont.component';

describe('SeoContComponent', () => {
  let component: SeoContComponent;
  let fixture: ComponentFixture<SeoContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
