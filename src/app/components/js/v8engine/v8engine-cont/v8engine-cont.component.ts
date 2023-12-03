import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {ScrollService} from "../../../../services/scroll.service";

@Component({
  selector: 'app-v8engine-cont',
  templateUrl: './v8engine-cont.component.html',
  styleUrls: ['./v8engine-cont.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class V8engineContComponent implements OnInit{

  sections = [
    'Unveiling the Intricacies..',
    'Introduction:',
    '1. The V8 Configuration:',
    '2. Power and Performance..',
    '3. Smooth Operation and..',
    '4. Torque Across the..',
    '5. Versatility Across..',
    '6. The Signature Sound:',
    '7. Integration of Advanced..',
    '8. Customization and..',
    'Conclusion:',
  ];

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollService.section$.subscribe(section => {
      // Do something with the active section (e.g., highlight it)
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event:any) {
    // Determine the active section based on scroll position
    // Notify the ScrollService about the active section
  }
}
