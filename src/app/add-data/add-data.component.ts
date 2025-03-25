import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { DataApiService } from '../data-api.service';


@Component({
  selector: 'app-add-data',
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css'
})
export class AddDataComponent {

  product:Product;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private productService:DataApiService){
      this.product = new Product();
    }

    onSubmit(){
      this.productService.save(this.product).subscribe(result=> this.gotoProductList());
    }

    gotoProductList(){
      this.router.navigate(['/view-product']);
    }  
}
