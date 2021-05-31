import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomersComponent } from './create-customers/create-customers.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [{ path: '', component: CustomersComponent },
{path:'create-customers',component:CreateCustomersComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
