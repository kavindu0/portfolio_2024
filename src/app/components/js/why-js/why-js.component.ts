import { Component } from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-why-js',
  templateUrl: './why-js.component.html',
  styleUrls: ['./why-js.component.scss']
})
export class WhyJsComponent {

  sections = [
    'JavaScript: A Swiss Army Knife..',
    'Introduction:',
    '1. Web Development with JavaScript',
    '2. Machine Learning and Deep..',
    '3. 2D Game Development with..',
    '4. Advanced Mathematical and..',
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
