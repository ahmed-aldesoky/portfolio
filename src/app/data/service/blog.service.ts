import { Injectable } from '@angular/core';
import { ArticleResponse, BlogResponse } from '../models/blog';

import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = `${environment.strapiUrl}/blogs`;

  constructor(private http:HttpClient,
    private auth: AuthenticationService
    ) { }
  
  getArticles(): Observable<BlogResponse>{
    return this.http.get<BlogResponse>(this.apiUrl,
      {
        params: new HttpParams({
          fromObject: {
            'sort': 'createdAt:desc',
            'pagination[pageSize]': 10
          }
        }),
        ...this.auth.getAuthHeader()
      }
    );
  }

  
   getArticlesById(key: string): Observable<ArticleResponse>{
    return this.http.get<ArticleResponse>(
      `${this.apiUrl}/${key}`,
      this.auth.getAuthHeader()
    );
  }

  
   
 
}
