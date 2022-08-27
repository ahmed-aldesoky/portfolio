import { Injectable } from '@angular/core';
import { CourseResponse } from '../models/courses';

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
 
}
