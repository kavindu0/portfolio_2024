import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveSimulationComponent } from './wave-simulation.component';

describe('WaveSimulationComponent', () => {
  let component: WaveSimulationComponent;
  let fixture: ComponentFixture<WaveSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveSimulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
