import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedcartService } from '../services/sharedcart.service';
declare var $:any ;


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingcartItems: any [] = [];
  totalCartAmount: any= 0 ;
  myOrderItems: any[]=[];
  quantity: number= 0;
  iisCartEmpty: boolean= false;
  selectedProductCount: number = 0;

  constructor(private router: Router,private sharedCartService:SharedcartService,private route: ActivatedRoute) { 
  }

  ngOnInit(): void { 
   this.getShoppingCartItem() ;
   this.calculateInitialCartAmount();
   this.selectedProductCount = this.shoppingcartItems.length;
  }
  getShoppingCartItem(){
    this.shoppingcartItems = JSON.parse(sessionStorage.getItem('cartProducts'));
    console.log('shoppingcartItems)',this.shoppingcartItems)    
  }
  deleteCartProduct(cartProductIndex: number){
    this.totalCartAmount -= this.shoppingcartItems[cartProductIndex]["price"];
    this.shoppingcartItems.splice(cartProductIndex,1);
    this.sharedCartService.changeQuantity(this.shoppingcartItems.length);
  }
  decreaseProductCount(cartProductIndex: number){
    if(this.shoppingcartItems[cartProductIndex]["quantity"]===1) {
      this.deleteCartProduct(cartProductIndex);
    }
    else{
    this.shoppingcartItems[cartProductIndex]["quantity"] -=1;
    this.totalCartAmount -= this.shoppingcartItems[cartProductIndex]["price"];
    }    
  }
  increaseProductCount(cartProductIndex: number){
    this.shoppingcartItems[cartProductIndex]["quantity"] +=1;
    this.totalCartAmount += this.shoppingcartItems[cartProductIndex]["price"]; 
  }
  calculateInitialCartAmount(){
    for(let i=0; i<this.shoppingcartItems.length; i++){
      this.totalCartAmount += this.shoppingcartItems[i]["price"];  
    }
  } 
  placeOrder() {
    if (sessionStorage.getItem('name')) {
    sessionStorage.setItem('shoppingcartitem',JSON.stringify(this.shoppingcartItems));
    sessionStorage.setItem('totalCartAmount',this.totalCartAmount); 
    this.router.navigateByUrl("order-success");  
    }
    else {
      $('#placeOrderModal').modal('show');
    }    
  }
  continue() {
    this.router.navigateByUrl("/login");
  }
  updateShoppingCart(i) {
    
    if(this.shoppingcartItems[i].isAddedtocart) {
      this.totalCartAmount += this.shoppingcartItems[i]["price"];
      this.selectedProductCount++;
    }
    else{
      this.totalCartAmount-= this.shoppingcartItems[i]["price"];
      this.selectedProductCount--;
    }    
    }
    }
