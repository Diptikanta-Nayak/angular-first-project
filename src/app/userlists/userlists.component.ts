import { Component, OnInit } from '@angular/core';
import { ProductserviveService } from '../productservive.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlists',
  templateUrl: './userlists.component.html',
  styleUrls: ['./userlists.component.scss']
})

export class UserlistsComponent implements OnInit {

  //index of createuser array to find the data for edit time
  data;

  constructor(private service:UserserviceService) {

    // get the data form service
    this.data = this.service.getuseritem();
  }

  ngOnInit(): void {
  }

  //delete  method scribe the purpose of a function 
  deleteitem(i) {

    if (confirm("are you sure !")) {
      this.data.splice(i, 1);
      
      //set data form service
      this.service.setuseritem(this.data);
    }

  }

}
