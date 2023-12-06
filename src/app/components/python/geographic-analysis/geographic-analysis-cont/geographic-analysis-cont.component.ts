import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {ScrollService} from "../../../../services/scroll.service";

@Component({
  selector: 'app-geographic-analysis-cont',
  templateUrl: './geographic-analysis-cont.component.html',
  styleUrls: ['./geographic-analysis-cont.component.scss']
})
export class GeographicAnalysisContComponent implements OnInit {

  sections = [
    'Unveiling the Power of..',
    'Introduction:',
    '1. Understanding Geographic..',
    '2. The Role of Geographic..',
    '3. Python for Advanced Geographic..',
    '‎ ‎ ➥ Handling Complex..',
    '‎ ‎ ➥ Advanced Visualization..',
    '4. Impact on Daily Life:..',
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
