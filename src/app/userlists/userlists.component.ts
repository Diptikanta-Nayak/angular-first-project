import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlists',
  templateUrl: './userlists.component.html',
  styleUrls: ['./userlists.component.scss']
})
export class UserlistsComponent implements OnInit {
data;
  constructor() {
    //local storage
    this.data = JSON.parse(localStorage.getItem('userlist'));
    console.log(this.data);
   }
   

  ngOnInit(): void {
  }

}
