import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {CategoryCreateComponent} from './category-create/category-create.component';

const routes: Routes = [
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'update/:productId', component: ProductUpdateComponent},
  {path: 'delete/:productId', component: ProductDeleteComponent},
  {path:   'category/create', component: CategoryCreateComponent}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
