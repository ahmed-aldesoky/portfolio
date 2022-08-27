import { Component, Input, OnInit,ViewChild, ElementRef } from '@angular/core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/data/models/product';


@Component({
  selector: 'app-prtofolio',
  templateUrl: './prtofolio.component.html',
  styleUrls: ['./prtofolio.component.css']
})
export class PrtofolioComponent implements OnInit {
  faPlus = faPlus;

  @Input() myproduct!:Product
  @Input() updateProduct:any

  
  constructor() { }

  ngOnInit(): void {

  }


}











// id1:string| undefined
//   name:string| undefined
//   Lastname: string | undefined;
//   Email:string | undefined



//   id:string| undefined
//   description:string| undefined
//   projectName:string| undefined
//   availability:string| undefined
//   price:string| undefined
//   category:string| undefined
//   projectimg:string| undefined

  // onClick(event:any)
  // {
   
  //     this.id1 = event.target.id;
  //     this.name = document.getElementById("firstname"+this.id1)?.innerHTML;
  //     this.Lastname = document.getElementById("lastname"+this.id1)?.innerHTML;
  //     this.Email = document.getElementById("email"+this.id1)?.innerHTML;
  // }
  // showDetails(event:any){
  //   this.id = event.target.id;
  //   this.projectName = document.getElementById("projectName"+this.id)?.innerHTML;
  //   this.description = document.getElementById("description"+this.id)?.innerHTML;
  //   this.category = document.getElementById("category"+this.id)?.innerHTML;
  //   this.projectimg = document.getElementById("projectimg"+this.id)?.innerHTML;
  //   this.price = document.getElementById("price"+this.id)?.innerHTML;
  //   this.availability = document.getElementById("availability"+this.id)?.innerHTML;
  //   document.get
  // }