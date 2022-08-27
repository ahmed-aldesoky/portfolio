import {createReducer,on } from "@ngrx/store";
import { Product } from "./data/models/product";
import{popProduct}from"./products.action";


export const initState:Product={
    id:0,
    description:"",
    projectName:"",
    availability:false,
    price:0,
    category:"",
    projectimg:"",
}

export const productReducer=createReducer(initState,on(popProduct,(state,payload)=>({
    ...payload
})))