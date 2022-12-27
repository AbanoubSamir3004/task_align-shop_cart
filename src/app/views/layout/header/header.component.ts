import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from 'app/core/shared/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  asideIconOpen: boolean = true;
  constructor(
    private translate: TranslateService,
    public mainService: MainService,
   ) {}
  ngOnInit() {
     console.log("OnInit header component")
  }

  

  
 
}
