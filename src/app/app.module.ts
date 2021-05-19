import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';

import { UserlistsComponent } from './userlists/userlists.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    ProductComponent,
  
    UserlistsComponent,
    ProductlistComponent,
    PageNotFoundComponent,
 
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
