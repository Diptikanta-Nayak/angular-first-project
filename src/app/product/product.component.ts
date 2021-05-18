import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder,FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productForm=new FormGroup({
  productName: new FormControl('', Validators.required),
  productDescription: new FormControl('',[ Validators.required,Validators.minLength(30)]),
  productCategory: new FormControl('', Validators.required),
  dateOfExpiry: new FormControl('', Validators.required),
  productPrice:new FormControl ('', [Validators.required, Validators.pattern("^[0-9]*$")]),
  productIsAvalable: new FormControl('', Validators.required),
  acceptTerms: new FormControl('', Validators.required),
 
});


  constructor(private fb: FormBuilder,
    private router :Router) {}
  

  ngOnInit(): void {
    
  }
  get f() { return this.productForm.controls }
  onSubmit(){
    this.productForm.markAllAsTouched();
    if (this.productForm.valid) {
      let productlist = JSON.parse(localStorage.getItem('productlist'));
      
      if (productlist === null) {
        productlist = [];
      }
      productlist.push(this.productForm.value);
      localStorage.setItem('productlist', JSON.stringify(productlist));
      this.productForm.reset();
      this.router.navigate(['/productlist']);
    }
    else {
      this.productForm.markAllAsTouched();
    }
  }
}
