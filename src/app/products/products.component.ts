import { Component, OnInit } from '@angular/core';
import { iProduct } from '../models/product.model';
import { GetProductsService } from '../services/get-products.service';
// import { productsList } from './products.mock'; //Lista falseada de productos

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  // productsList = productsList;

  productsList: iProduct[] = [];

  constructor(private _apiService: GetProductsService){}

  ngOnInit(): void {
      this._apiService.getProducts().subscribe(data => {
        console.log(data);
        
        this.productsList = data
      })
  }
}
