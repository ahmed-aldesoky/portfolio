import { Component, Input, OnInit } from '@angular/core';
import { course } from 'src/app/data/models/courses';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  data:course[]=[]
  @Input() mycourse!:course


  constructor() { }

  ngOnInit(): void {
  }

}
