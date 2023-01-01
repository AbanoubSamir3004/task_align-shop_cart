import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment.prod';
import { Products } from '../models/home';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  GetAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(env.domainUrl + 'products');
  }
}
