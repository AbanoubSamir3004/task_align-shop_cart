import { TranslateService } from '@ngx-translate/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '@modules/main.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private translateService: TranslateService, private mainService: MainService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token_Azhar');
    if (token) {
      req = req.clone({
        headers: req.headers.set('authorization', token),
      });
    }
  
    return next.handle(req);
  }
}
