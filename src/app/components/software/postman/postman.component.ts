import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-postman',
  templateUrl: './postman.component.html',
  styleUrls: ['./postman.component.scss']
})
export class PostmanComponent implements OnInit {
  sections = [
    'Mastering API Testing',
    '1. Introduction to Postman',
    '2. Creating Requests',
    '3. Organizing Requests with..',
    '4. Request Authorization',
    '5. Testing and Automation',
    '6. Environments and Variables',
    '7. Documenting APIs',
    '8. Mock Servers',
    '9. Monitoring APIs',
    '10. Advanced Features',
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
