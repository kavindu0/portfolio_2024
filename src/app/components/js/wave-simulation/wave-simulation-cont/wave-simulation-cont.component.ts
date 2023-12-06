import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ScrollService} from "../../../../services/scroll.service";

@Component({
  selector: 'app-wave-simulation-cont',
  templateUrl: './wave-simulation-cont.component.html',
  styleUrls: ['./wave-simulation-cont.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WaveSimulationContComponent implements OnInit, AfterViewInit {

  sections = [
    'Simulating Damped Waves with..',
    'Introduction:',
    '1. The True Wave Equation:',
    '2. Discrete Form of the..',
    '3. Converting from Canvas..',
    '4. JavaScript Implementation:',
    'Conclusion:',
  ];
  gistUrl: string = 'https://gist.github.com/kavicastelo/a48e49be7e8fd5b166648415312189af';

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
