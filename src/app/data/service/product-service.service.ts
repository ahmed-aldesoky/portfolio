import { Injectable } from '@angular/core';
import { ProductResponse } from '../models/product';

import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiUrl= 'http://localhost:1337/api/projects'

  constructor(private http:HttpClient) { }
  getProducts(): Observable<ProductResponse>{
    return this.http.get<ProductResponse>(this.apiUrl)
   }
 
}
