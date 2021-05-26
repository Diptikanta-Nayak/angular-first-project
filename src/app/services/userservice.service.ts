import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

// function that return user list stored in localstorage
  getuseritem() {
    return JSON.parse(localStorage.getItem('userlist')) || [];
  }

  //function store user list in localstorage
  setuseritem(userlist) {
    localStorage.setItem('userlist', JSON.stringify(userlist));
  }
}
