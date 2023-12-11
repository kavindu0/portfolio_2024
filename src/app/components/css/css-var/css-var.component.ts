import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-css-var',
  templateUrl: './css-var.component.html',
  styleUrls: ['./css-var.component.scss']
})
export class CssVarComponent implements OnInit{

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
