import { Component } from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.scss']
})
export class DataAnalysisComponent {

  sections = [
    'Unveiling the Power of..',
    'Introduction:',
    '1. Understanding Geographic..',
    '2. The Role of Geographic..',
    '3. Python for Advanced Geographic..',
    '‎ ‎ ➥ Handling Complex..',
    '‎ ‎ ➥ Advanced Visualization..',
    '4. Impact on Daily Life:..',
    '‎ ‎ ➥ Google Maps:',
    '‎ ‎ ➥ SpaceX Starlink:',
    'Conclusion:',
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
