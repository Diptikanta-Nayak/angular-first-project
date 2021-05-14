import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import {ProductComponent} from './product/product.component'

const routes: Routes = [
  {path:'createuser',component:CreateuserComponent},
  {path:'product',component:ProductComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
