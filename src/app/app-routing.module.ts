import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CreateuserComponent } from './createuser/createuser.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserlistsComponent } from './userlists/userlists.component';

const routes: Routes = [

  { path: 'createuser', component: CreateuserComponent },
  { path: 'createuser-edit/:id', canActivate: [AuthGuard], component: CreateuserComponent },
  { path: 'product', canActivate: [AuthGuard], component: ProductComponent },
  { path: 'userlists', canActivate: [AuthGuard], component: UserlistsComponent },
  { path: 'productlist', canActivate: [AuthGuard], component: ProductlistComponent },
  { path: 'product-edit/:id', canActivate: [AuthGuard], component: ProductComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: '', redirectTo: '/userlists', pathMatch: 'full' },
  { path: "**", redirectTo: '/page-not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
