import { Injectable } from '@angular/core';
import { ArticleResponse, BlogResponse } from '../models/blog';

import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl= 'http://localhost:1337/api/blogs'

  constructor(private http:HttpClient) { }
  
  getArticles(): Observable<BlogResponse>{
    return this.http.get<BlogResponse>(this.apiUrl)
   }

   getArticlesById(key: string): Observable<ArticleResponse>{
    return this.http.get<ArticleResponse>(this.apiUrl+"/"+key)
   }


   
 
}
