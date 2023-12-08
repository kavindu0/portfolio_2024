import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ScrollService} from "../../../../services/scroll.service";

@Component({
  selector: 'app-fluid-simulation-cont',
  templateUrl: './fluid-simulation-cont.component.html',
  styleUrls: ['./fluid-simulation-cont.component.scss']
})
export class FluidSimulationContComponent implements OnInit, AfterViewInit {

  sections = [
    'Unveiling Fluid Simulation:..',
    'Introduction:',
    '1. Unraveling Fluid Physics',
    '‎ ‎ ➥ What is a Fluid?',
    '‎ ‎ ➥ Essential Physics..',
    '‎ ‎ ➥ Fluid Simulation:',
    '‎ ‎ ➥ Navier-Stokes..',
    '2. Smoothed Particle Hydrodynamics..',
    '‎ ‎ ➥ Introduction to SPH',
    '‎ ‎ ➥ Fluid as a Velocity..',
    '‎ ‎ ➥ Fluid Simulation Steps',
    '‎ ‎ ➥ Divergence and..',
    '‎ ‎ ➥ Handling Obstacles..',
    '‎ ‎ ➥ Solving the Grid:',
    '‎ ‎ ➥ Measuring Pressure..',
    '3. Advection: Moving Fluid..',
    '‎ ‎ ➥ Smoke Advection and..',
    '4. JavaScript Implementation:',
    'Conclusion:',
    'Reference:',
  ];
  gistUrl: string = 'https://gist.github.com/kavicastelo/8f69c0c8307783372e42b4d7116b9edc';

  @ViewChild('iframe', {static: false}) iframe: any;

  ngAfterViewInit() {
    const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    const content = `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <base target="_parent"><title>bjkkj</title>
        </head>
        <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')">
        <script type="text/javascript" src="${this.gistUrl}.js"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }

  constructor(private scrollService: ScrollService, private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit() {
    this.scrollService.section$.subscribe(section => {
      // Remove highlight from all sections
      // this.sections.forEach(s => this.renderer.removeClass(this.el.nativeElement.querySelector(`#${s}`), 'highlight'));

      // Add highlight to the active section
      // this.renderer.addClass(this.el.nativeElement.querySelector(`#${section}`), 'highlight');

    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Determine the active section based on scroll position
    // Notify the ScrollService about the active section
  }
}
