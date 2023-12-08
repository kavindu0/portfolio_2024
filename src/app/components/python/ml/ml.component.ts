import {ChangeDetectorRef, Component} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.scss']
})
export class MlComponent {

  sections:any = [];
  activeSection: string | any;

  constructor(private scrollService: ScrollService, private router: Router, private cdr: ChangeDetectorRef) {
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
      });

    if (this.router.url === '/python/machine-learning') {
      this.cdr.detectChanges();
      window.scrollTo(0, 0);
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
    if (this.router.url === '/python/machine-learning/supervised-learning') {
      this.cdr.detectChanges();
      window.scrollTo(0, 0);
      this.sections = [
        'Unveiling the Power of..',
        'Introduction:',
        '1. Understanding Supervised..',
        '‎ ‎ ➥ The Essence of Super..',
        '‎ ‎ ➥ Components of Super..',
        '2. Types of Supervised..',
        '‎ ‎ ➥ Classification:',
        '‎ ‎ ➥ Regression:',
        '3. Key Concepts and Techniques:',
        '‎ ‎ ➥ Model Evaluation..',
        '‎ ‎ ➥ Overfitting and..',
        '‎ ‎ ➥ Cross-Validation:',
        '4. Applications of Supervised..',
        '5. Challenges and Considerations:',
        '6. Future Directions and..',
        'Conclusion:',
        'References:',
      ];
      this.scrollService.scrollToSection('Unveiling the Power of..');
    }
  }

  onNavClick(section: string) {
    this.scrollService.scrollToSection(section);
  }
}
