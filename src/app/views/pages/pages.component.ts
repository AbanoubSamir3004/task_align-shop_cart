import { Component, OnInit } from '@angular/core';
import { MainService } from '@modules/main.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public mainService:MainService) { }

  ngOnInit() {
  }

}
