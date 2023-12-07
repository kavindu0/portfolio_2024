import { Component } from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.scss']
})
export class MlComponent {

  sections = [
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
