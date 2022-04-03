import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MockyUrlsService } from './mocky-urls.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

 constructor(private mockService: MockyUrlsService,private router: Router) { }
 canActivate() {
    //  return true;

     if (this.mockService.user && this.mockService.user.isAdmin) {
       return true;       
     }
     else{
       this.router.navigate(['']);
      return false;

     } 
 }
  
}
