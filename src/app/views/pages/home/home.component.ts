import { Component, OnInit } from '@angular/core';
import { MainService } from '@modules/main.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public mainService:MainService, private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      
      // this.messageService.add(this.mainService.toastErrorHandler(this.test))
    }


    

}
