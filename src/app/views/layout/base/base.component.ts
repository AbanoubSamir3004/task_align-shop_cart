import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MainService } from 'app/core/shared/main.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  constructor(public mainService: MainService, private router: Router) {}

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.mainService.asideStatus = false;
    }
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart != event instanceof NavigationEnd) {
        if (window.innerWidth < 768) {
          this.mainService.asideStatus = false;
        }
      }
    });
  }
}
