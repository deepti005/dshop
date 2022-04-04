import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { MockyUrlsService } from '../services/mocky-urls.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SharedcartService } from '../services/sharedcart.service';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = [    
    {
      'username': 'deepti',
      'password': '123456',
      'isAdmin': true 
    },
    {
      'username': 'ravindar',
      'password': '1234',
      'isAdmin': false   
    },
    {
      'username': 'prachi',
      'password': '123',
      'isAdmin': false   
    }
  ]

loginDetails: any;
  
  ngOnInit(): void {
    this.getloginDetails()     
  }
  username : string;
  password : string;
  loginForm : FormGroup;
  isloggedin : boolean;

  @Output() loginResponse = new EventEmitter<{}>();

  constructor(private _mockyUrlService:MockyUrlsService,private sharedCartService: SharedcartService,private router:Router) {
    this.loginForm = new FormGroup({});
    this.loginForm.addControl('username', new FormControl('',Validators.required))
    this.loginForm.addControl('password', new FormControl('',Validators.required))
  }

  login() {
    let i:any;
    console.log(this.loginForm.value)
    for(i= 0; i<this.credentials.length;i++){
      if((this.credentials[i].username === this.username)&&(this.credentials[i].password === this.password)){
        // this.loginResponse.emit({
        //   'username': this.username,
        //   'loginStatus':true
        // })
        // console.log('loginresponse',this.username)
        // console.log(this.password)
      this._mockyUrlService.user = this.credentials[i]; 
      this.isloggedin= true; 
      sessionStorage.setItem('name',this.username); 
      this.sharedCartService.showName(this.username);
      console.log('logincalled')
      this.router.navigateByUrl('/')
        }
    }
  }
  getloginDetails() {
    this._mockyUrlService.getLogin().subscribe(
      (response)=>{
        this.loginDetails= response;
        console.log('loginDetails',this.loginDetails)
      }
    )
  } 
}
