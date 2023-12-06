import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {ScrollService} from "../../../../services/scroll.service";

@Component({
  selector: 'app-wave-simulation-cont',
  templateUrl: './wave-simulation-cont.component.html',
  styleUrls: ['./wave-simulation-cont.component.scss']
})
export class WaveSimulationContComponent implements OnInit {

  sections = [
    'Simulating Damped Waves with..',
    'Introduction:',
    '1. The True Wave Equation:',
    '2. Discrete Form of the..',
    '3. Converting from Canvas..',
    '4. JavaScript Implementation:',
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
