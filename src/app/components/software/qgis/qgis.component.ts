import { Component } from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-qgis',
  templateUrl: './qgis.component.html',
  styleUrls: ['./qgis.component.scss']
})
export class QgisComponent {

  sections = [
    'CSS Variables: Empowering..',
    'Introduction:',
    '1. Defining CSS Variables',
    '2. Using CSS Variables..',
    '3. Advantages of CSS..',
    '‎ ‎ ➥ Dynamic Theming',
    '‎ ‎ ➥ Easy Maintenance',
    '‎ ‎ ➥ Conditional Styling',
    '‎ ‎ ➥ Simplified Theming..',
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
