import { Component } from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-qgis',
  templateUrl: './qgis.component.html',
  styleUrls: ['./qgis.component.scss']
})
export class QgisComponent {

  sections = [
    'Unraveling QGIS Analysis:',
    'Introduction:',
    '1. Understanding QGIS Basics',
    '2. Essential QGIS Analysis..',
    '3. Advanced Techniques',
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
