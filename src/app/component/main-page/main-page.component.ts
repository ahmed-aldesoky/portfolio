import { Component, OnInit } from '@angular/core';
import { Product, ProductResponse } from 'src/app/data/models/product';
import { ProductServiceService } from 'src/app/data/service/product-service.service';
import { popProduct } from "../../products.action";
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  products:Product[]=[]
  filterdProjects!:Product[]
  _filterText:string=""
  ProductObj!:Observable<Product>
  popProduct!:Product
  allProductArr!:Observable<Product[]>
  allProduct!:Product[]

  constructor(private productService:ProductServiceService,private store:Store<{popProduct:Product,allProduct:Product[]}>) { 
    this.ProductObj=store.select("popProduct")
    this.ProductObj.subscribe((data)=>{
      this.popProduct=data
      
    })
    this.allProductArr=store.select("allProduct")
    this.allProductArr.subscribe((data)=>{

      this.allProduct=[...data]
      console.log(data);

      
      
    })
  }

  ngOnInit(): void {




  this.productService.getProducts()
      .subscribe((products)=>(this.products=products.data.map(product=>({
        id:product.id,
        description:product.attributes.description,
        projectName:product.attributes.projectName,
        availability:product.attributes.availability,
        price:product.attributes.price,
        category:product.attributes.category,
        projectimg:product.attributes.projectimg,
            })))
    )

    
    
  }
// **********----------filtering projects---------********----
  filterProject(value:string){
      this._filterText=value
      this.filterdProjects= this.filterProjectByCategory(this._filterText)
        }
    filterProjectByCategory(filterTerm: string){
      if(this.products.length === 0 || this._filterText === ''){
        return this.products;
    } else {
        return this.products.filter((product) => 
        { 
            return product.category.toLowerCase() === filterTerm.toLowerCase();
        })}}
      
      updatePopProduct(value:Product){
        
        this.store.dispatch(popProduct(value))
      }
        
      }
