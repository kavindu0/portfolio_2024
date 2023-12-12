import {Component, OnInit} from '@angular/core';
import {filter} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';
  isNavbar = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.router.url === '/about') {
          this.isNavbar = false;
          const mainCanvas = document.querySelector('.main-canvas') as HTMLElement;
          mainCanvas.style.backgroundColor = '#1c1c1c';
          mainCanvas.style.backgroundImage = 'none';
        }
        else {
          if (!localStorage.getItem('foo')) {
            localStorage.setItem('foo', 'no reload')
            location.reload()
          } else {
            localStorage.removeItem('foo')
          }
        }
      });
  }
}
