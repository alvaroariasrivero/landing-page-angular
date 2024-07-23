import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iProduct, Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  private baseURL = 'https://fakestoreapi.com/products'

  constructor(private _httpClient: HttpClient) { }

  public getProducts(sort?: string): Observable<iProduct[]>{
    const params = sort ? `?sort=${sort}` : ''
    return this._httpClient.get<iProduct[]>(`${this.baseURL}${params}`)
  }

  public getProductById(id: number): Observable<iProduct>{
    return this._httpClient.get<iProduct>(`${this.baseURL}/${id}`)
  }

  public getCategories(): Observable<Category[]>{
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`)
  }

  public postProduct(product: iProduct): Observable<iProduct>{
    return this._httpClient.post<iProduct>(this.baseURL, product)
  } 

  public updateProduct(id: number, product: iProduct): Observable<iProduct>{
    return this._httpClient.put<iProduct>(`${this.baseURL}/${id}`, product)
  }
}
