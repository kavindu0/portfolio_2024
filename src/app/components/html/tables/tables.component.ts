import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../services/scroll.service";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  sections = [
    'Mastering HTML Table Elements',
    '1. Introduction to HTML Tables',
    '2. Table Headers and Data Cells',
    '3. Table Rows and Columns',
    '4. Styling Tables with CSS',
    '5. Nested Tables and..',
    '6. Advanced Table Features',
    '7. Responsive Tables',
    '8. Code Examples',
    'Conclusion'
  ]
  activeSection: string | any;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.section$.subscribe(section => {
      this.activeSection = section;
    });
  }

  onNavClick(section: string) {
    this.scrollService.scrollToSection(section);
  }

}
