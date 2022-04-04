import { Component, Input, OnChanges, OnInit, Output, SimpleChanges,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { OpenPoputContainerComponent } from '../open-poput-container/open-poput-container.component';
import { MockyUrlsService } from '../services/mocky-urls.service';
import { SharedcartService } from '../services/sharedcart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
 
  searchProduct : any;
  // loginDetails: any;
  // isloggedin: boolean;
  quantity:number=0;
  name: string= '';

  ngOnInit(): void {} 

  // username : string;
  // password : string;
  // loginForm : FormGroup;  
  // products: any [];

  constructor(private mockUrlService: MockyUrlsService,
    private sharedCartService:SharedcartService,
    private route: ActivatedRoute,
    private router: Router) {
    this.sharedCartService.cartSource.subscribe((value)=>{
      this.quantity= value;    
    });
    this.sharedCartService.nameSource.subscribe((n)=>{
      this.name = n;
      console.log('bsname',this.name)
    });    
    }   
}
