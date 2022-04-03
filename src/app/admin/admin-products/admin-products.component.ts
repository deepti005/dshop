import { Component, OnInit } from '@angular/core';
import { MockyUrlsService } from '../../services/mocky-urls.service';
import { Product } from '../../Forms/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: any;  
  product: Product = new Product();
  productForm : FormGroup;
  addProducts: any[]=[];

  categories: string []= ["vegetable","bread","dairy","spices","fruits"];
  

  constructor(private _mockyUrlsService: MockyUrlsService) { }

  ngOnInit(): void {

    this.getProductList();
    this.generateProductForm();
  }
  generateProductForm() {
    this.productForm = new FormGroup ({});
    this.productForm.addControl('productname',new FormControl('',Validators.required));
    this.productForm.addControl('productprice',new FormControl('',Validators.required));
    this.productForm.addControl('productimage',new FormControl('',Validators.required));
    this.productForm.addControl('category',new FormControl('',Validators.required));
  }
  getProductList(){
    this._mockyUrlsService.getProducts().subscribe(
      (response)=> {
        this.products= response["products"];
        console.log(this.products)
      }
    )
    }
  makeEditable(index: number){
    this.products[index]["editable"]= true;
    this.products[index]["show"] = true;      
       
  }
  deleteData(index: number){
    this.products.splice(index,1);
  }
  addProduct() {
    console.log("",this.productForm.value)
  }
  cancel(index: number) {
    this.products[index]["show"] = false;
    this.products[index]["editable"]= false;


  }

}
