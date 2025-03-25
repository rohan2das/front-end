import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataApiService } from '../data-api.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalDismissReasons,NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { error } from 'console';

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
  deleteMessage =false;

  form: boolean = false;
  closeResult! :string;

  constructor(private productsService:DataApiService, private modalService:NgbModal){
  }

  ngOnInit(): void {
    this.productsService.findAll().subscribe(data=>{
      this.products=data;
    })
  }

  deleteProduct(id:number){
    this.productsService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.productsService.findAll().subscribe(data=>{
            this.products =data
          })
        },
        error=> console.log(error)
      )
  }

  editProduct(id:number, product:Product){
    this.productsService.update(id,product).subscribe();
  }

  open(content:any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) =>{
      this.closeResult = `Closed with: ${result}`;
    }, (reson)=>{
      this.closeResult = `Dismissed ${this.getDismissReason(reson)}`;
    });
  }

  private getDismissReason(reason:any) : string{
    if(reason === ModalDismissReasons.ESC){
      return 'by pressing ESC';
    }
    else if(reason === ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking backdrop';
    }
    else{
      return `with ${reason}`;
    }
  }

  closeForm(){

  }

  cancel(){
    this.form =false;
  }

}
