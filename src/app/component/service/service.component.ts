import { Component, OnInit } from '@angular/core';
import { faBoxesStacked,faShoppingCart,faCircle,faLaptop,faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faCircle = faCircle;
  faBoxesStacked = faBoxesStacked;
  faLaptop = faLaptop;
  faLock = faLock;


  constructor() { }

  ngOnInit(): void {
  }

}
