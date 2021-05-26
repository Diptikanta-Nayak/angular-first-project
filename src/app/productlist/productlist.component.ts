import { Component, OnInit } from '@angular/core';
import { ProductserviveService } from '../services/productservive.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  //index of productlist array to find the data for edit time
  productdata;

  constructor(private service: ProductserviveService) {

    //get productdata  in localstorage using service
    this.productdata = this.service.getproductitem();
  }

  ngOnInit(): void {
  }

  //delete  method scribe the purpose of a function 
  deleteitem(i) {

    if (confirm("are you sure !")) {
      this.productdata.splice(i, 1);

      //set productdata  in localstorage using service
      this.service.setproductitem(this.productdata);
    }
  }
}

