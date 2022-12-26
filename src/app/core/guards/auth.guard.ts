import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private router: Router){}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      const token = localStorage.getItem('token_Azhar') as string;
      // if (token) {
      //   this.router.navigateByUrl('/');
      // } else {
      //   this.router.navigateByUrl('/login')
      // }
      // console.log(token,"sssssssssssssssssssssssssssssssss");
      // return true;


      if (!token) {
        this.router.navigateByUrl('/login');
        return false;
      } else {
        return true;
      } 
  }
  
}
