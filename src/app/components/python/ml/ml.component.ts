import { Component } from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.scss']
})
export class MlComponent {

  sections:any = [];
  activeSection: string | any;

  constructor(private scrollService: ScrollService, private router: Router) {
  }

  ngOnInit(): void {
    this.scrollService.section$.subscribe(section => {
      this.activeSection = section;
    });

    if (this.router.url === '/python/machine-learning') {
      this.sections = [
        'The Comprehensive..',
        'Introduction:',
        '1. Unveiling the Basics:',
        '‎ ‎ ➥ Unraveling the Essence..',
        '‎ ‎ ➥ Navigating Types of..',
        '2. Key Concepts Illuminated:',
        '‎ ‎ ➥ Pioneering Feature..',
        '‎ ‎ ➥ Charting Model..',
        '‎ ‎ ➥ Navigating Overfitting..',
        '3. A Sojourn into Advanced..',
        '‎ ‎ ➥ The Depths of Deep..',
        '‎ ‎ ➥ Harnessing Transfer..',
        '‎ ‎ ➥ The Advancements in..',
        '4. The Practical Frontier:',
        '‎ ‎ ➥ Selecting the Right..',
        '‎ ‎ ➥ Crafting Real-world..',
        '‎ ‎ ➥ Sustaining a State of..',
        'Conclusion:',
      ];
      this.scrollService.scrollToSection('The Comprehensive..');
    }
    if (this.router.url === '/python/geographic-analysis/') {
      this.scrollService.scrollToSection('Introduction:');
    }
  }

  onNavClick(section: string) {
    this.scrollService.scrollToSection(section);
  }
}
