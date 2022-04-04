import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedcartService {

  quantity: number = 0;
  name: string = '';
  cartSource: Subject<number>= new Subject();
  nameSource: Subject<string>= new Subject();

  constructor() { }

  changeQuantity(qty:number) {
    this.cartSource.next(qty);    
  }
  showName(name: string) {
    console.log('inside showname')
    this.nameSource.next(name);    
  }
}
