import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';

import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserlistsComponent } from './userlists/userlists.component';


const routes: Routes = [
  {path:'createuser',component:CreateuserComponent},
  {path:'product',component:ProductComponent},
  {path:'userlists',component:UserlistsComponent},
  {path:'productlist',component:ProductlistComponent},
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
