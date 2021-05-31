import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  //return  localstorage in user login function
  isUserLoggedIn() {
    return localStorage.getItem('userLoggedIn') === 'true'
  }

  //set localstorage in user login function
  setUserLoggedIn() {
    localStorage.setItem('userLoggedIn', 'true');
  }

 
  logout() {

       // remove user from local storage and set current user to null
    localStorage.removeItem('userLoggedIn');

    //redirect login page
    this.router.navigate(['/loginpage']);

  }

}
