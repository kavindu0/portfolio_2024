import { Component } from '@angular/core';

@Component({
  selector: 'app-why-js-cont',
  templateUrl: './why-js-cont.component.html',
  styleUrls: ['./why-js-cont.component.scss']
})
export class WhyJsContComponent {
  reactExampleResult: number = 0;

  reactExample() {
    this.reactExampleResult += 1;
  }
}
