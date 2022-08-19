import { Component, OnInit } from '@angular/core';
import { Product, ProductResponse } from 'src/app/data/models/product';
import { ProductServiceService } from 'src/app/data/service/product-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  products:Product[]=[]
  filterdProjects:Product[]=this.products
  _filterText:string=""
  x!:string

  constructor(private productService:ProductServiceService) { }

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
    )}
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

        
      }
