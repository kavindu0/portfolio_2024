import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-css-advance',
  templateUrl: './css-advance.component.html',
  styleUrls: ['./css-advance.component.scss']
})
export class CssAdvanceComponent implements OnInit {

  sections = [
    'Mastering CSS Flexbox:',
    'Understanding Flexbox',
    '‎ ‎ ➥ What is Flexbox?',
    '‎ ‎ ➥ Key Concepts',
    'Working with Flex Container',
    '‎ ‎ ➥ Properties for..',
    'Styling Flex Items',
    '‎ ‎ ➥ Properties for flex..',
    'Responsive Design with Flexbox',
    '‎ ‎ ➥ Example: Responsive..',
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
