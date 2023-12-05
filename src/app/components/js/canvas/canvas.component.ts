import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

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
