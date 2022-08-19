import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/data/models/product';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() x!:Product

  constructor() { }
  
  ngOnInit(): void {
  }

}
