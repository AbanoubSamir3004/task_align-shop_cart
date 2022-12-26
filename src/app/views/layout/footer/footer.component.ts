import { Component, OnInit } from '@angular/core';
import { MainService } from 'app/core/shared/main.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(public mainService: MainService) {}

  ngOnInit(): void {}
}
