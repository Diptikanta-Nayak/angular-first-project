import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('', Validators.required),

  })

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: UserserviceService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  get f() { return this.loginForm.controls }

  loginSubmit() {


    if (this.loginForm.valid) {

      //get sevice store localstorage
      let userlist = this.service.getuseritem();

      //i email and password is match go to the details and not match show error meassage
      const userLoggedIndex = userlist.findIndex(user => user.email == this.loginForm.value.email && user.password == this.loginForm.value.password);

      if (userLoggedIndex > -1) {

        this.authService.setUserLoggedIn()

        //redirect to userlist page
        this.router.navigate(['/userlists']);
      }

      else {

        //error meassage email and passord is not match
        alert('email and password invalid');
      }
    }

    else {
      this.loginForm.markAllAsTouched();
    }

  }

}


