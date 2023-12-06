import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-geographic-analysis',
  templateUrl: './geographic-analysis.component.html',
  styleUrls: ['./geographic-analysis.component.scss']
})
export class GeographicAnalysisComponent implements OnInit {

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
