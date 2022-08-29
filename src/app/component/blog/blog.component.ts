import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Blog, BlogResponse } from 'src/app/data/models/blog';
import { BlogService } from 'src/app/data/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog!:Blog[]
  filterdArticle!:Blog[]
  _filterText:string=""
  constructor(private blogService:BlogService, private router:Router) { }

  ngOnInit(): void {

    this.blogService.getArticles().subscribe((article)=>(
      this.blog=article.data.map((article)=>({
        id:article.id,
        atricleTitle: article.attributes.atricleTitle,
        articleContent:article.attributes.articleContent,
         category:article.attributes.category,
         articleImg:article.attributes.articleImg,
         articleDate:article.attributes.articleDate,
         articleSummary:article.attributes.articleSummary,


      }))
    ))
  }
  filterProject(value:string){
    this._filterText=value
    this.filterdArticle= this.filterProjectByCategory(this._filterText)
      }
  filterProjectByCategory(filterTerm: string){
    if(this.blog.length === 0 || this._filterText === ''){
      return this.blog;
  } else {
      return this.blog.filter((product) => 
      { 
          return product.category.toLowerCase() === filterTerm.toLowerCase();
      })}}
    
      toArticle(article:Blog){
        this.router.navigate(["/blog",article.id]);
      }

}
