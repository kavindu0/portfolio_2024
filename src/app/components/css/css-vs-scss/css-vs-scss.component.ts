import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-css-vs-scss',
  templateUrl: './css-vs-scss.component.html',
  styleUrls: ['./css-vs-scss.component.scss']
})
export class CssVsScssComponent implements OnInit{

  sections = [
    'CSS3 vs. SCSS: Navigating..',
    'Introduction:',
    '1. CSS3: A Glimpse of..',
    '2. SCSS: Elevating the..',
    '3. Advantages of SCSS..',
    '‎ ‎ ➥ Variables:',
    '‎ ‎ ➥ Nesting:',
    '‎ ‎ ➥ Mixins:',
    '‎ ‎ ➥ Partials and Import:',
    '‎ ‎ ➥ Math Operations:',
    '4. Disadvantages of SCSS:',
    '‎ ‎ ➥ Learning Curve:',
    '‎ ‎ ➥ Compilation Step:',
    '5. SCSS in Action: Real..',
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
