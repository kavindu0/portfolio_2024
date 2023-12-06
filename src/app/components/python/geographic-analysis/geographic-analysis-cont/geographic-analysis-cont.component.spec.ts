import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicAnalysisContComponent } from './geographic-analysis-cont.component';

describe('GeographicAnalysisContComponent', () => {
  let component: GeographicAnalysisContComponent;
  let fixture: ComponentFixture<GeographicAnalysisContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographicAnalysisContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeographicAnalysisContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
