import { Injectable } from '@angular/core';
import { CourseResponse,course } from '../models/courses';

import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  private apiUrl= 'http://localhost:1337/api/courses'

  constructor(private http:HttpClient) { }
  getCourses(): Observable<CourseResponse>{
    return this.http.get<CourseResponse>(this.apiUrl)
   }
 

  // Adding new Product to cart db if logged in else localStorage
  addToCart(data: course): void {
    const a: course[] = JSON.parse(localStorage.getItem("avct_item")!) || [];
    a.push(data);
    
    setTimeout(() => {
      localStorage.setItem("avct_item", JSON.stringify(a));
    }, 500);

  }

  // Removing cart from local
  removeLocalCartProduct(course: course) {
    const courses: course[] = JSON.parse(localStorage.getItem('avct_item')!);

    for (let i = 0; i < courses.length; i++) {
      if (courses[i].id === course.id) {
        courses.splice(i, 1);
        break;
      }
    }
    // ReAdding the products after remove
    localStorage.setItem("avct_item", JSON.stringify(courses));
  }

  // Fetching Locat CartsProducts
  getLocalCartProducts(): course[] {
    const course: course[] =
      JSON.parse(localStorage.getItem("avct_item")!) || [];

    return course;
  }
  clearLocalCartProducts() {
localStorage.clear()
  }
}