import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedcartService {

  quantity: number = 0;
  cartSource: Subject<number>= new Subject();

  constructor() { }

  changeQuantity(qty:number) {
    this.cartSource.next(qty);
    
  }
}
