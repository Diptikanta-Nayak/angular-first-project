import { Component, OnInit } from '@angular/core';
import { ProductserviveService } from '../productservive.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  //index of productlist array to find the data for edit time
  data;

  constructor(private service: ProductserviveService) {

    //get function form service
    this.data = this.service.getproductitem();
  }

  ngOnInit(): void {
  }

  //delete  method scribe the purpose of a function 
  deleteitem(i) {

    if (confirm("are you sure !")) {
      this.data.splice(i, 1);

      //set in servive function
      this.service.setproductitem(this.data);
    }
  }
}

