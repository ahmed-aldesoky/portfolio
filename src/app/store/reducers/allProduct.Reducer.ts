import {createReducer,on } from "@ngrx/store";
import { Product } from "src/app/data/models/product";
import { allProductAction,getProducts } from "../actions/allProducts.actions";


export const initState:Product[]=[{
    id:0,
    description:"",
    projectName:"",
    availability:false,
    price:0,
    category:"",
    projectimg:"",
}]

export const allProductReducer= createReducer(initState,on(allProductAction,():any=>{
    
    return getProducts()
}))