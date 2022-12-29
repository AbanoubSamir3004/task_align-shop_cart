import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  navHeight: number = 35;
  footerHeight: number = 36;
  asideStatus: boolean = true;
  titlePage:string='';

  constructor(
    private router: Router,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}
  // logout function
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
  // handleError from request . .
  handleError(error: any) {
    console.log('handleError');
    console.log(error);
    if (error.code == 401) {
      localStorage.removeItem('token');
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: this.router.routerState.snapshot.url },
      });
    }

    if (error.code == 404) {
      this.router.navigate(['/404'], {
        queryParams: { returnUrl: this.router.routerState.snapshot.url },
      });
    }
  }

  showSuccessMSG(msg: any) {
    this.primengConfig.ripple = true;
    this.messageService.add({
      key: 'bl',
      severity: 'success',
      summary: msg,
    });
  }
  showErrorMSG(msg: any) {
    this.primengConfig.ripple = true;
    this.messageService.add({
      key: 'bl',
      severity: 'error',
      summary: 'Error',
      detail: msg,
    });
  }

}
