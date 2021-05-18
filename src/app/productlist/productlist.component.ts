import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  data;
  constructor() {
    this.data = JSON.parse(localStorage.getItem('productlist'));
    console.log(this.data);
  }
  ngOnInit(): void {
  }

}
