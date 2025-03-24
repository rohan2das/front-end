import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataApiService } from '../data-api.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-data',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './list-data.component.html',
  styleUrl: './list-data.component.css'
})
export class ListDataComponent  implements OnInit{

  products: Product[] = [];
  product: Product = new Product();

  constructor(private productsService:DataApiService){
  }

  ngOnInit(): void {
    this.productsService.findAll().subscribe(data=>{
      this.products=data;
    })
  }

}
