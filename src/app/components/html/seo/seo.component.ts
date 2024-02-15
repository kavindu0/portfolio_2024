import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss']
})
export class SeoComponent implements OnInit {
  sections = [
    'Mastering SEO',
    '1. Understanding SEO',
    '2. SEO Basics',
    '3. Technical SEO',
    '4. Content is King',
    '5. User Experience and SEO',
    '6. Link Building Strategies',
    '7. Local SEO',
    '8. SEO Analytics',
    '9. Voice Search and SEO',
    '10. Algorithm Updates and..',
    '11. SEO Tools',
    '12. International SEO',
    'Conclusion'
  ]
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
