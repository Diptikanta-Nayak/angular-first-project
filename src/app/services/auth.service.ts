import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  //return localstorage in user login function
  isUserLoggedIn() {
    return localStorage.getItem('userLoggedIn') === 'true'
  }

  //set localstorage in user login function
  setUserLoggedIn() {
    localStorage.setItem('userLoggedIn', 'true');
  }

  //logout button
  logout() {

    //removeitem in localstorage
    localStorage.removeItem('userLoggedIn');

    //redirect login page
    this.router.navigate(['/loginpage']);

  }

}
