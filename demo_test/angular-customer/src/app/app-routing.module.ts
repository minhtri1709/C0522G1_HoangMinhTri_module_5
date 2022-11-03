import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SavingEditComponent} from './saving-edit/saving-edit.component';
import {SavingListComponent} from './saving-list/saving-list.component';


const routes: Routes = [
  {
    path: '', component: SavingListComponent
  },
  {
    path: 'edit/:id', component: SavingEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
