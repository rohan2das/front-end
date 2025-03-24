import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private baseUrl:string;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'http://localhost:7007/products/v1/';
  }
}
