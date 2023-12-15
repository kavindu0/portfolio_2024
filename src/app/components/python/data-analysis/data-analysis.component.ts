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
    'A Comprehensive Guide..',
    'Introduction:',
    '1. Why Data Analysis?',
    '2. Technologies in Data..',
    '3. Step-by-Step Guide to..',
    '‎ ‎ ➥ Define Objectives..',
    '‎ ‎ ➥ Data Collection:',
    '‎ ‎ ➥ Data Cleaning:',
    '‎ ‎ ➥ Exploratory Data..',
    '‎ ‎ ➥ Feature Engineering:',
    '‎ ‎ ➥ Data Visualization:',
    '‎ ‎ ➥ Statistical Analysis:',
    '‎ ‎ ➥ Predictive Modeling:',
    '‎ ‎ ➥ Interpret Results:',
    '‎ ‎ ➥ Communicate Insights:',
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
