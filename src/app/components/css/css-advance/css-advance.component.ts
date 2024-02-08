import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-css-advance',
  templateUrl: './css-advance.component.html',
  styleUrls: ['./css-advance.component.scss']
})
export class CssAdvanceComponent implements OnInit {

  sections = [
    'Mastering Advanced CSS..',
    '1. CSS Grid Layout',
    '‎ ‎ ➥ Understanding CSS..',
    '2. CSS Flexbox for Responsive..',
    '‎ ‎ ➥ Leveraging Flexbox',
    '3. CSS Transitions and..',
    '‎ ‎ ➥ Adding Motion to..',
    '4. CSS Variables',
    '‎ ‎ ➥ Modularizing Your..',
    '5. Responsive Typography..',
    '‎ ‎ ➥ Scaling Text..',
    'Conclusion:',
  ]
  activeSection: string | any;
  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.section$.subscribe(section => {
      this.activeSection = section;
    });
  }

  onNavClick(section: string) {
    this.scrollService.scrollToSection(section);
  }

}
