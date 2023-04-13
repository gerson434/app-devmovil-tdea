import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPagePage } from './edit-page.page';

const routes: Routes = [
  { 
    path: 'edit-page',
    component:EditPagePage ,
    children: [
      {
        path: 'edit-page',
        loadChildren: () => import('../edit-page/edit-page.module').then(m => m.EditPagePageModule)
  } ,] 
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPagePageRoutingModule {}
