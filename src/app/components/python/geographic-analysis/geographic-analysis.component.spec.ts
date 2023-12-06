import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicAnalysisComponent } from './geographic-analysis.component';

describe('GeographicAnalysisComponent', () => {
  let component: GeographicAnalysisComponent;
  let fixture: ComponentFixture<GeographicAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographicAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeographicAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
