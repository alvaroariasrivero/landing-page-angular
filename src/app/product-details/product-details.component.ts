import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  productTitle: string = "";

  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
      this._route.params.subscribe(params => {
        this.productTitle = params['productId'];
      });
  };

}
