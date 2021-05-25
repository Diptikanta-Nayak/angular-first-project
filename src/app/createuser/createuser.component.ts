import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  //index of createuser array to find the data for edit time
  id;

  registerForm = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    conformPassword: new FormControl('', Validators.required),
    phoneNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    city: new FormControl('', Validators.required),


  },
   {
    validators: this.MustMatch('password', 'conformPassword')
  });

  //if  you input the password must be same type of conformpassword
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matching Control if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

// store user list data from localstorage
  userlist = [];

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,private service:UserserviceService) { }

  ngOnInit(): void {

    //store edit
    this.userlist = this.service.getuseritem();

    // get id from url
    this.id = this.route.snapshot.params['id'];

    //edit assign the name new value
    if (this.id) {
      const createuser = this.userlist[this.id];
      this.registerForm.patchValue(createuser);
    }
  }

  //return our form controls.
  get f() { return this.registerForm.controls }

  onSubmit() {

    if (this.registerForm.valid) {

      //if list is null then is not push anything  set is blank array
      if (this.userlist === null) {
        this.userlist = [];
      }

      // if you change some data edit the same page
      if (this.id) {
        this.userlist[this.id] = this.registerForm.value;
      }
      else {
        this.userlist.push(this.registerForm.value);
      }

      //set the data form localstorage
      this.service.setuseritem(this.userlist);
      
      //reset data 
      this.registerForm.reset();

      //if click the button show the table (router)
      this.router.navigate(['/userlists']);
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
}
