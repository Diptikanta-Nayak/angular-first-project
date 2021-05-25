import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

//service function get  return in localstorage
  getuseritem() {
    return JSON.parse(localStorage.getItem('userlist'));
  }

  //service function set  in localstorage
  setuseritem(userlist) {
    localStorage.setItem('userlist', JSON.stringify(userlist));
  }
}
