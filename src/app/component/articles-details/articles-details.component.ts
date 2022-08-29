import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleResponse, Blog } from 'src/app/data/models/blog';
import { BlogService } from 'src/app/data/service/blog.service';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.css']
})
export class ArticlesDetailsComponent implements OnInit {
  articleID!:any
  article!:Blog

  constructor(private activatedRouter:ActivatedRoute, private blogService:BlogService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((parmas:ParamMap)=>{
      this.articleID= parmas.get("id")
    })
    this.blogService.getArticlesById(this.articleID).subscribe((xxx)=>(
      this.article=xxx.data.attributes
    )
    )
  }

}
