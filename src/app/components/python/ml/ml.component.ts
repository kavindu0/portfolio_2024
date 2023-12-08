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
    if (this.router.url === '/python/machine-learning/unsupervised-learning') {
      window.scrollTo(0, 0);
      this.sections = [
        'Unraveling the Mysteries..',
        'Introduction:',
        '1. The Essence of Unsupervised..',
        '‎ ‎ ➥ Defining Unsupervised..',
        '‎ ‎ ➥ Key Components:',
        '2. Techniques in Unsupervised..',
        '‎ ‎ ➥ Clustering Techniques:',
        '‎ ‎ ➥ Dimensionality Reduct..',
        '3. Applications of Unsupervised..',
        '4. Challenges and Considerations:',
        '5. Future Directions and..',
        'Conclusion:',
      ];
      this.scrollService.scrollToSection('The Comprehensive..');
    }
    if (this.router.url === '/python/machine-learning/reinforcement-learning') {
      window.scrollTo(0, 0);
      this.sections = [
        'Mastering the Art of..',
        'Introduction:',
        '1. The Essence of Reinforcement..',
        '‎ ‎ ➥ Defining Reinforcement..',
        '‎ ‎ ➥ Key Components:',
        '‎ ‎ ➥ The RL Process:',
        '‎ ‎ ➥ Types of Reinforcement..',
        '2. Essential Algorithms:',
        '3. Real-World Applications:',
        '4. Challenges and Considerations:',
        '5. Future Directions and..',
        '6. Future Directions and..',
        'Conclusion:',
      ];
      this.scrollService.scrollToSection('The Comprehensive..');
    }

    this.cdr.detectChanges();
  }

  onNavClick(section: string) {
    this.scrollService.scrollToSection(section);
  }
}
