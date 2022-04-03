import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-open-poput-container',
  templateUrl: './open-poput-container.component.html',
  styleUrls: ['./open-poput-container.component.css']
})
export class OpenPoputContainerComponent implements OnInit {

  componentModalRef = null ;
  constructor(private modalService: NgbModal) { 
    this.openModal();
  }

  ngOnInit(): void {
  }

  openModal() {
    console.log('openmodal')
      this.componentModalRef = this.modalService.open(LoginComponent,{keyboard: false, size: 'xl',backdrop:'static'});    
  }
  // ngOnDestroy() {
  //   this.destroy.next();
  // }

}
