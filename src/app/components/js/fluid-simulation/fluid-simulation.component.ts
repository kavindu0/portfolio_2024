import { Component } from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-fluid-simulation',
  templateUrl: './fluid-simulation.component.html',
  styleUrls: ['./fluid-simulation.component.scss']
})
export class FluidSimulationComponent {

  sections = [
    'Simulating Damped Waves with..',
    'Introduction:',
    '1. The True Wave Equation:',
    '2. Discrete Form of the..',
    '3. Converting from Canvas..',
    '4. JavaScript Implementation:',
    'Conclusion:',
    'Reference:',
  ];
  activeSection: string | any;

  constructor(private scrollService: ScrollService) {
  }

  ngOnInit(): void {
    this.scrollService.section$.subscribe(section => {
      this.activeSection = section;
    });
  }

  onNavClick(section: string) {
    this.scrollService.scrollToSection(section);
  }
}
