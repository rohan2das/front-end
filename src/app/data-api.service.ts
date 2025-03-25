import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { json } from 'node:stream/consumers';

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

  public update(id:number, prod:Product):Observable<any> {
    return this.http.put(`${this.baseUrl}update/${id}`, prod);
  }

  public delete(id:number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}delete/${id}`, {responseType:'json'});
  }

}
