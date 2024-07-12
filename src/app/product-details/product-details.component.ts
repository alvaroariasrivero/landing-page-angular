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

  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
      this._route.params.subscribe(params => {
        this.product = productsList.find((element) => element.album === params['productId']);    
      });
  };

}
