import { Component } from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-jasp',
  templateUrl: './jasp.component.html',
  styleUrls: ['./jasp.component.scss']
})
export class JaspComponent {

  sections = [
    'Unveiling JASP:',
    'Introduction:',
    '1. Getting Started with JASP',
    '2. Conducting Analyses in..',
    '3. Advantages of Using JASP',
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
