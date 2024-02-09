import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-postman',
  templateUrl: './postman.component.html',
  styleUrls: ['./postman.component.scss']
})
export class PostmanComponent implements OnInit {
  sections = [
    'Unveiling Postman',
    'Introduction',
    '1. Getting Started with Postman',
    '2. Conducting Analyses in Postman',
    '3. Advantages of Using Postman',
    'Conclusion',
  ]
  activeSection: string | any
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
