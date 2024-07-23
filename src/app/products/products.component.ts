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

  productsList: iProduct[] = []
  sort: string = ''

  constructor(private _apiService: GetProductsService){}

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(): void {
    this._apiService.getProducts(this.sort).subscribe((data: iProduct[]) => {
      this.productsList = data;
    })
  }

  sortProducts(){
    if(this.sort === '' || this.sort === 'asc'){
      this.sort = 'desc'
    }else{
      this.sort = 'asc'
    }
    this.loadProducts()
  }
}
