import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  navHeight: number = 43;
  footerHeight: number = 36;
  otherLang: string = '';
  asideStatus: boolean = true;

  // Good API
  // AIzaSyDu3BDX1fp-NvusXJO2B_UF4cCRwkCKfaA
  // Fake API
  // AIzaSyBsIDV4eowL9WB67TtqWx4KAPRF3K-cJgQ
  apiKey: string = 'AIzaSyBsIDV4eowL9WB67TtqWx4KAPRF3K-cJgQ';
  constructor(private router: Router , private messageService:MessageService , private primengConfig:PrimeNGConfig) {}
  // logout function
  logout() {
    localStorage.removeItem('token_Azhar');
    this.router.navigateByUrl('/login');
  }
  // handleError from request . .
  handleError(error: any) {
    console.log('handleError');
    console.log(error);
    if (error.code == 401) {
      localStorage.removeItem('token_Azhar');
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
  // handle error by message toast
  toastErrorHandler(error: any): Object {
    this.primengConfig.ripple = true
    return {
      key: 'bl',
      severity: 'error',
      summary: 'خطأ في البيانات',
      detail: error,
      sticky: true
    };
  }
  showTopCenter(msg:any) {
    this.primengConfig.ripple = true;
      this.messageService.add({key: 'bl', severity:'error', summary: 'خطأ', detail: msg, sticky: true});
  }

  toastSuccessRequest(message: any): Object {
    return {
      key: 'bl',
      severity: 'success',
      summary: message,
      sticky: true
    };
  }

 
}
