import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";
import {filter} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

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

  constructor(private scrollService: ScrollService, private router: Router) {
  }

  ngOnInit(): void {
    this.scrollService.section$.subscribe(section => {
      this.activeSection = section;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Reload the page when the route changes
        window.location.reload();
        window.scrollTo(0, 0);
      });
  }

  onNavClick(section: string) {
    this.scrollService.scrollToSection(section);
  }

}
