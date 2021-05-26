import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
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

  constructor(private fb: FormBuilder, private router: Router,private service:UserserviceService) { }

  ngOnInit(): void {
  }
  get f() { return this.loginForm.controls }

  loginSubmit() {

    if (this.loginForm.valid) {
       
      let userlist = this.service.getuseritem();
      console.log(userlist)

      //set the data in localstorage and value is true set in local storage 
      localStorage.setItem('userLoggedIn', 'true');

      //if click the button show the table
      this.router.navigate(['/userlists']);

    }
    else {
      this.loginForm.markAllAsTouched();
    }

  }

}
