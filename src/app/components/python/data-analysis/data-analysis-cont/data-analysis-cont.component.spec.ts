import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalysisContComponent } from './data-analysis-cont.component';

describe('DataAnalysisContComponent', () => {
  let component: DataAnalysisContComponent;
  let fixture: ComponentFixture<DataAnalysisContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAnalysisContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAnalysisContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
