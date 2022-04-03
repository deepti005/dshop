import { Component, OnInit } from '@angular/core';
import { MockyUrlsService } from '../services/mocky-urls.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private mockyurl: MockyUrlsService) { }

  ngOnInit(): void {
  }

}
