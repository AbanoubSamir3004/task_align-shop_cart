import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment.prod';
import { Login } from '../models/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<Login>(env.domainUrl + 'auth/login/', data);
  }
  register(data: any) {
    return this.http.post<Login>(env.domainUrl + 'users/', data);
  }
}
