import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    ProductComponent,
 
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
