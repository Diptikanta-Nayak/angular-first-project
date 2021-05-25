import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviveService {

  constructor() {
  }

  //get function service
  getproductitem() {
    return JSON.parse(localStorage.getItem('productlist'));
  }

  //set function in service
  setproductitem(productlist) {
    localStorage.setItem('productlist', JSON.stringify(productlist));
  }
}

