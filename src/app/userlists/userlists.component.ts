import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-userlists',
  templateUrl: './userlists.component.html',
  styleUrls: ['./userlists.component.scss']
})

export class UserlistsComponent implements OnInit {

  //index of createuser array to find the data for edit time
  userdata;

  constructor(private service:UserserviceService) {

    // get user list in localstorage form service
    this.userdata = this.service.getuseritem();
  }

  ngOnInit(): void {
  }

  //delete  method scribe the purpose of a function 
  deleteitem(i) {

    if (confirm("are you sure !")) {
      this.userdata.splice(i, 1);

      //set user list in localstorage form service
      this.service.setuseritem(this.userdata);
    }

  }

}
