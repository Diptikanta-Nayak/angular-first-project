import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {
id;
  registerForm = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    conformPassword: new FormControl('', Validators.required),
    phoneNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    city: new FormControl('', Validators.required),


  }, {
    validators: this.MustMatch('password', 'conformPassword')
  });
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  
  userlists = [];
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.userlists = JSON.parse(localStorage.getItem('userlist'));
    this.id = this.route.snapshot.params['id'];
    console.log(this.userlists)
    if (this.id) {
      const createuser = this.userlists[this.id];
      this.registerForm.patchValue(createuser);
      

    }
    
  }

  get f() { return this.registerForm.controls }
  onSubmit() {

    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      //if list is null then is not push anything  set is blank array
      if (this.userlists === null) {
        this.userlists = [];
      }

      if(this.id) {
        this.userlists[this.id] = this.registerForm.value;
      } 
      else {
      this.userlists.push(this.registerForm.value);
      }
      localStorage.setItem('userlist', JSON.stringify(this.userlists ));
      this.registerForm.reset();
      //if click the button show the table (router)
      this.router.navigate(['/userlists']);
    }
    else {
      this.registerForm.markAllAsTouched();
    }

  }

}
