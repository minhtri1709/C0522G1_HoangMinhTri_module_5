import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerModule} from './customer/customer.module';
import {HomeComponent} from './home/home.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', loadChildren: () => CustomerModule}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
