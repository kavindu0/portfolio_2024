import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";
import {filter} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-wave-simulation',
  templateUrl: './wave-simulation.component.html',
  styleUrls: ['./wave-simulation.component.scss']
})
export class WaveSimulationComponent implements OnInit {

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
