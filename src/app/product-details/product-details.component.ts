import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsList, Product } from '../products/products.mock';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  productsList: Product[] = productsList;
  product?: Product;
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
    setTimeout(() => 
      this._route.params.subscribe(params => {
      this.product = this.productsList.find((element) => element.id == params['productId']); 
      this.loading = false;
      this.color = this.product?.price as number < 10 ? 'green' : 'blue'       
    }), 1000);
  };

}
