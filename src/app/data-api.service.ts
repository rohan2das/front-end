import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private baseUrl:string;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'http://localhost:7007/products/v1/';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+'listall');
  }

  public save(prod:Product){
    return this.http.post<Product>(this.baseUrl+'create', prod);
  }
}
