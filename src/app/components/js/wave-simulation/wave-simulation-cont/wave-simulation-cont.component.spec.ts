import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveSimulationContComponent } from './wave-simulation-cont.component';

describe('WaveSimulationContComponent', () => {
  let component: WaveSimulationContComponent;
  let fixture: ComponentFixture<WaveSimulationContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveSimulationContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveSimulationContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
