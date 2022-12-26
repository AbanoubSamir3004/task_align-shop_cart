import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private state: RouterStateSnapshot) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          console.log( " yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy " , error )
          // const applicationError = error.headers.get('Application-Error');
          // if (applicationError) {
          //   return throwError(applicationError);
          // }
          // const ServerError: any[] = error.error?.errors || [];
          // let errors: any[] = [];
          // ServerError.forEach((err) => {
          //   errors = [...errors, ...err];
          // });

          // return throwError(
          //   {
          //     code: error.status,
          //     errors,
          //   } || 'serverError'
          // );
        }
        return throwError('UnknownError');
      })
    );
  }
}

