import { Component } from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";
import {filter} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-fluid-simulation',
  templateUrl: './fluid-simulation.component.html',
  styleUrls: ['./fluid-simulation.component.scss']
})
export class FluidSimulationComponent {

  sections = [
    'Unveiling Fluid Simulation:..',
    'Introduction:',
    '1. Unraveling Fluid Physics',
    '‎ ‎ ➥ What is a Fluid?',
    '‎ ‎ ➥ Essential Physics..',
    '‎ ‎ ➥ Fluid Simulation:',
    '‎ ‎ ➥ Navier-Stokes..',
    '2. Smoothed Particle Hydrodynamics..',
    '‎ ‎ ➥ Introduction to SPH',
    '‎ ‎ ➥ Fluid as a Velocity..',
    '‎ ‎ ➥ Fluid Simulation Steps',
    '‎ ‎ ➥ Divergence and..',
    '‎ ‎ ➥ Handling Obstacles..',
    '‎ ‎ ➥ Solving the Grid:',
    '‎ ‎ ➥ Measuring Pressure..',
    '3. Advection: Moving Fluid..',
    '‎ ‎ ➥ Smoke Advection and..',
    '4. JavaScript Implementation:',
    'Conclusion:',
    'Reference:',
  ];
  activeSection: string | any;

  constructor(private scrollService: ScrollService, private router: Router) {
  }

  ngOnInit(): void {
    this.scrollService.section$.subscribe(section => {
      this.activeSection = section;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Reload the page when the route changes
        window.location.reload();
        window.scrollTo(0, 0);
      });
  }

  onNavClick(section: string) {
    this.scrollService.scrollToSection(section);
  }
}
