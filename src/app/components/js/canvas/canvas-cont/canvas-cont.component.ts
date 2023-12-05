import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {ScrollService} from "../../../../services/scroll.service";

@Component({
  selector: 'app-canvas-cont',
  templateUrl: './canvas-cont.component.html',
  styleUrls: ['./canvas-cont.component.scss']
})
export class CanvasContComponent implements OnInit{

  sections = [
    'Unleashing Creativity with..',
    'Introduction:',
    '1. Understanding the..',
    '2. Getting the Canvas..',
    '3. Exploring Canvas..',
    '‎ ‎ ➥ Fill and Stroke..',
    '‎ ‎ ➥ Drawing Shapes:',
    '‎ ‎ ➥ Path Drawing:',
    '‎ ‎ ➥ Text Rendering:',
    '‎ ‎ ➥ Image Drawing:',
    '‎ ‎ ➥ Transformations:',
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
