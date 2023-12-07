import {Component, ElementRef, HostListener, Renderer2} from '@angular/core';
import {ScrollService} from "../../../../services/scroll.service";

@Component({
  selector: 'app-css-vs-scss-cont',
  templateUrl: './css-vs-scss-cont.component.html',
  styleUrls: ['./css-vs-scss-cont.component.scss']
})
export class CssVsScssContComponent {

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
