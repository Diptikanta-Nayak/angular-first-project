import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
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
  // edit product declare
  productlist = [];

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //store edit
    this.productlist = JSON.parse(localStorage.getItem('productlist'));
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      const product = this.productlist[this.id];
      this.productForm.patchValue(product);

      if (product.quantities?.length > 0) {
        for (let index = 0; index < product.quantities?.length; index++) {
          this.addQuantity();
        }
      }

    }
    // console.log(this.id)
  }

  /**
     * methid of formArray
     *
     */
  quantities(): FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  /**
    * formControlName declare qty,price
    *
    */
  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }
  /**
   * Add formarray.
   *
   */
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  /**
   * Remove Quantity.
   *
   */
  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }

  /**
  * contorls.
  *
  */
  get f() { return this.productForm.controls }

  onSubmit() {
    
    this.productForm.markAllAsTouched();
    if (this.productForm.valid) {

      if (this.productlist === null) {
        this.productlist = [];
      }
//edit in same page
      if (this.id) {
        this.productlist[this.id] = this.productForm.value;
      } else {
        this.productlist.push(this.productForm.value);
      }

      //local storage
      
      localStorage.setItem('productlist', JSON.stringify(this.productlist));
      //Redirect back to leastling
      this.router.navigate(['/productlist']);
    }

    else {
      this.productForm.markAllAsTouched();
    }
  }
}
