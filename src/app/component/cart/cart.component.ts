import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/data/models/courses';
import { CourseServiceService } from 'src/app/data/service/course-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: course[]=[]


  constructor(private courseService:CourseServiceService) { }

  ngOnInit(): void {
    this.getCartProduct();

  }
  removeCartProduct(product: course) {
    this.courseService.removeLocalCartProduct(product);
    // Recalling
    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.courseService.getLocalCartProducts();
  }
  clear(){
    this.courseService.clearLocalCartProducts()
  }

}
