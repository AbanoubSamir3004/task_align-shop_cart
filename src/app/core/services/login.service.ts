import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment.prod';
import { Login } from '../models/login';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http:HttpClient) {}

  base_URL: string = env.apiPath + 'Auth/';

  login(data: any) {
    return this.http.post<Login>(this.base_URL + 'LoginUser/', data);
  }
}
