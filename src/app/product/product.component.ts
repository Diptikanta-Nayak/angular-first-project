import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder,FormArray } from '@angular/forms';

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
  countryAvalable : new FormArray([])
});
availableCities = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.availableCities = ['Gujarat','Goa','Odisha' ,'Karala','West Bengal' ];
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
      localStorage.setItem('userlist', JSON.stringify(productlist));
      this.productForm.reset();
    }
    else {
      this.productForm.markAllAsTouched();
    }
  }
}
