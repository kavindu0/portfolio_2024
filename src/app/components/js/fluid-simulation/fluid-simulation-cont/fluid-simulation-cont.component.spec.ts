import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidSimulationContComponent } from './fluid-simulation-cont.component';

describe('FluidSimulationContComponent', () => {
  let component: FluidSimulationContComponent;
  let fixture: ComponentFixture<FluidSimulationContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluidSimulationContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluidSimulationContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
