import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostPage } from './add-post.page';

const routes: Routes = [
  { 
    path: 'add-post',
    component: AddPostPage,
    children: [
      {
        path: 'add-post',
        loadChildren: () => import('../add-post/add-post.module').then(m => m.AddPostPageModule)
  } ,] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPostPageRoutingModule {}
