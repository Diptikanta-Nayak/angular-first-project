import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviveService {

  constructor() {
  }

  // function that return user list stored in localstorage
  getproductitem() {
    return JSON.parse(localStorage.getItem('productlist')) || [];
  }

//function store user list in localstorage
  setproductitem(productlist) {
    localStorage.setItem('productlist', JSON.stringify(productlist));
  }
}

