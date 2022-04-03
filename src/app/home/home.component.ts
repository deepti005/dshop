import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mock } from 'protractor/built/driverProviders';
import { MockyUrlsService } from '../services/mocky-urls.service';
import { SharedcartService } from '../services/sharedcart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any [];
  filteredProducts: any []=[];
  selectedProducts: any []=[];
  addToCart: [];
  // counter:any=0;
  productcategories: any;
  isAddtocart: boolean=true;
  showcart: boolean= false;
  searchProduct : string;
  categories = {
    'All Categories': 'all',
    "Vegetable":'vegetable',
    'Bread':'bread',
    'Spices':'spices',
    'Dairy':'dairy',
    'Fruits':'fruits'
  };
  category: any;  
  @Input() counter:number= 0;
  quantity:number= 1;
  

  constructor(private _mockyurlservice: MockyUrlsService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedCartService:SharedcartService) {
    sessionStorage.setItem('cartProducts',JSON.stringify(this.selectedProducts));  
    // _mockyurlservice.getProducts().subscribe(product =>{
    //   this.products = product["products"];
    // })
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      console.log('inside edge')
      // this.getCategory();
      this.filteredProducts = (this.category)? this.products.filter(p=> p.category===this.category) : this.products;
    } )
    this._mockyurlservice.getProducts().subscribe(
      (response)=>{
        if(response){
          console.log(response)
          this.products = response["products"];
          this.filteredProducts = this.products;
          console.log(this.products)
        }
      }
    ) 
  }
  getCategory(){
    console.log('category',this.category)
    this.filteredProducts = [];
    if(this.category=== 'all'){
       this.filteredProducts = this.products;
    }
    else {
      
       for (var i =0; i< this.products.length; i++){  
        if(this.category ===this.products[i][this.category]){
          this.filteredProducts.push(this.products[i]);          
      }       
      }     

    }

        
    } 
  allCategory() {
   
  }  
  
  addtocart(productIndex: number){ 
    
    this.sharedCartService.changeQuantity(this.quantity++);
    this.filteredProducts[productIndex]["isAddedtocart"]= true;
    this.filteredProducts[productIndex]["quantity"]= 1; 
    this.selectedProducts.push(this.filteredProducts[productIndex]);
    console.log(this.selectedProducts)
    sessionStorage.setItem('cartProducts',JSON.stringify(this.selectedProducts));
    
  }

  increaseCount(productIndex: number){
    this.counter= this.counter+1;
    this.filteredProducts[productIndex]["quantity"]+=1;
  }
  decreaseCount(productIndex: number){
    if(this.filteredProducts[productIndex]["quantity"]<=1){
      this.filteredProducts[productIndex]["isAddedtocart"]= false;
    }
    else{
      this.filteredProducts[productIndex]["quantity"]-=1;      
    }
  }
  search(searchValue: string) {
    if(this.filteredProducts.length>0){
       this.filteredProducts= this.products.filter(
        (product)=>{
         return product.productName.toString().toLowerCase().indexOf(searchValue)!==-1

        }  
        );
    }
  }
  productInformation() {
    
  }


}
