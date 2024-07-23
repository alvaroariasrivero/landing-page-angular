import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { iProduct } from '../models/product.model';
import { GetProductsService } from '../services/get-products.service';
// import { productsList, Product } from '../products/products.mock'; //Lista falseada
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product?: iProduct;
  loading: boolean = true;
  color: string = '';
  errorMessage: string | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _apiService: GetProductsService
  ){}

  // ngOnInit(): void {
  //   setTimeout(() => 
  //     this._route.params.subscribe(params => {
  //     this.product = this.productsList.find((element) => element.id == params['productId']); 
  //     this.loading = false;
  //     this.color = this.product?.price as number < 10 ? '#0bdb0b' : 'blue'       
  //   }), 1000);
  // };

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this._apiService.getProductById(Number(params['productId'])).subscribe(
        (data: iProduct) => {
          this.product = data;
          this.color = this.product?.price < 10 ? '#0bdb0b' : 'blue';
          this.loading = false;
        },
        (error) => {
          this.errorMessage = 'An error occurred while fetching the product';
          console.error('Error fetching product:', error);
          this.loading = false;
        }
      )
    })
  }

}
