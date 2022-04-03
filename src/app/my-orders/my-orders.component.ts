import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  myOrders: any[] = [];
  myOrderAmount: any[]=[];

  constructor() {
    this.myOrders = JSON.parse(sessionStorage.getItem('shoppingcartitem'));
   }

  ngOnInit(): void {
    this.calculateMyOrderAmount();
  }
  calculateMyOrderAmount() {
    this.myOrderAmount= JSON.parse(sessionStorage.getItem('totalCartAmount'));
  }
  makePayment() {

  }

}
