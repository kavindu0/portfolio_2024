import {Component, ElementRef, HostListener, Renderer2} from '@angular/core';
import {ScrollService} from "../../../../services/scroll.service";

@Component({
  selector: 'app-ml-cont',
  templateUrl: './ml-cont.component.html',
  styleUrls: ['./ml-cont.component.scss']
})
export class MlContComponent {

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

  constructor(private scrollService: ScrollService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.scrollService.section$.subscribe(section => {
      // Remove highlight from all sections
      // this.sections.forEach(s => this.renderer.removeClass(this.el.nativeElement.querySelector(`#${s}`), 'highlight'));

      // Add highlight to the active section
      // this.renderer.addClass(this.el.nativeElement.querySelector(`#${section}`), 'highlight');

    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event:any) {
    // Determine the active section based on scroll position
    // Notify the ScrollService about the active section
  }
}
