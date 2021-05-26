import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductserviveService } from '../services/productservive.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  //index of product array to find the data for edit time
  id;

  productForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    productDescription: new FormControl('', [Validators.required, Validators.minLength(30)]),
    productCategory: new FormControl('', Validators.required),
    dateOfExpiry: new FormControl('', Validators.required),
    productPrice: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    productIsAvalable: new FormControl('', Validators.required),
    acceptTerms: new FormControl('', Validators.required),
    quantities: this.fb.array([]), //declare formArray
  });

  // store product list data from localstorage
  productlist = [];

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private service: ProductserviveService) {
  }

  ngOnInit(): void {

    // get the data in service
    this.productlist = this.service.getproductitem();

    // get id from url
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      const product = this.productlist[this.id];
      this.productForm.patchValue(product);

      //check the quantities of porduct is more than 0 then we have to add that from to our formarray
      if (product.quantities?.length > 0) {

        for (let index = 0; index < product.quantities?.length; index++) {
          this.addQuantity();
        }
      }
    }
  }

  /**
    * return form array for product quantity
    *
    */
  quantities(): FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  /**
    * return new form group for new quantity
    *
    */
  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }

  /**
   * Add new quantity form into quantities form array.
   *
   */
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  /**
   * Remove Quantity from our quantity form array.
   *
   */
  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }

  /**
  * return our form controls.
  *
  */
  get f() { return this.productForm.controls }

  onSubmit() {

    if (this.productForm.valid) {

      //array value can not null
      if (this.productlist === null) {
        this.productlist = [];
      }

      //edit in same page
      if (this.id) {
        this.productlist[this.id] = this.productForm.value;
      } else {
        this.productlist.push(this.productForm.value);
      }

      // set the data in service
      this.service.setproductitem(this.productlist);

      //if click the button show the table (router)
      this.router.navigate(['/productlist']);
    }

    else {
      this.productForm.markAllAsTouched();
    }
  }
}

