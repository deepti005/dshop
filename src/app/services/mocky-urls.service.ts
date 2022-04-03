import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsComponent } from '../products/products.component';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MockyUrlsService {

  private producturl = "https://run.mocky.io/v3/84ad9c66-58f4-402c-bb76-0f1ba2ae2d82";
  private loginUrl = "https://3rz9yylnc7.execute-api.ap-south-1.amazonaws.com/signin";
  user: any;

  constructor(private http: HttpClient) { }

  getProducts() {    
    const response= this.http.get(this.producturl);
    return response;
  }
  getLogin() {
    const response= this.http.post(this.loginUrl,{
      "username" : "Deepti",
      "password" : "Deepti@1233"
    })
    return response;
  }
}
