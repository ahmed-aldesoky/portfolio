import {  createAction, props} from "@ngrx/store";
import { Product, ProductResponse } from '../../data/models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';



export const allProductAction= createAction("GET ALL PRODUCT")


export async function  getProducts(): Promise<Product[]>{
  const apiUrl= 'http://localhost:1337/api/projects'
  const response= await fetch(apiUrl)
  console.log(response.json());
  
  return await response.json()

   }