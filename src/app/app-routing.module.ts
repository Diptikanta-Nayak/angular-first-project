import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CreateuserComponent } from './createuser/createuser.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserlistsComponent } from './userlists/userlists.component';

const routes: Routes = [
  { path: 'createuser', component: CreateuserComponent },
  { path: 'createuser-edit/:id', component: CreateuserComponent },
  { path: 'product', component: ProductComponent },
  { path: 'userlists', component: UserlistsComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'product-edit/:id', component: ProductComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: '/userlists', pathMatch: 'full' },
  { path: "**", redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
