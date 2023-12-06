import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-geographic-analysis',
  templateUrl: './geographic-analysis.component.html',
  styleUrls: ['./geographic-analysis.component.scss']
})
export class GeographicAnalysisComponent implements OnInit {

  sections = [
    'Unveiling the Intricacies..',
    'Introduction:',
    '1. The V8 Configuration:',
    '2. Power and Performance..',
    '3. Smooth Operation and..',
    '4. Torque Across the..',
    '5. Versatility Across..',
    '6. The Signature Sound:',
    '7. Integration of Advanced..',
    '8. Customization and..',
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
