import {createAction, props} from "@ngrx/store" 
import { Product } from "./data/models/product"


export const popProduct= createAction("POPUPPRODUCT",props<Product>())