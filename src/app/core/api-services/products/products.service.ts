import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@env";
import {Observable} from "rxjs";
import {IProduct} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

  getProducts():Observable<IProduct[]>{
    const url:string = `${environment.baseUrl}products`
    return this._http.get<IProduct[]>(url)
  }

  getProductCategories():Observable<string[]>{
    const url:string = `${environment.baseUrl}products/categories`
    return this._http.get<string[]>(url)
  }
}
