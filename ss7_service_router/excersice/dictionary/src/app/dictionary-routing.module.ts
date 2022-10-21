import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';

const routes: Routes = [{
  path: '', component: DictionaryPageComponent
},
  {path: 'detail/:keyWord', component: DictionaryDetailComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class DictionaryRoutingModule {
}
