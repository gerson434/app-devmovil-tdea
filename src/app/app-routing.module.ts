import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from './login/login.module';
import { LoginPage } from './login/login.page';

const routes: Routes = [
  { path: '', redirectTo: 'login/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'add-post', loadChildren: () => import('./add-post/add-post.module').then( m => m.AddPostPageModule)},
  { path: 'edit-page', loadChildren: () => import('./edit-page/edit-page.module').then( m => m.EditPagePageModule)},
  {
    path: 'add-post',
    loadChildren: () => import('./add-post/add-post.module').then( m => m.AddPostPageModule)
  },
  {
    path: 'edit-page',
    loadChildren: () => import('./edit-page/edit-page.module').then( m => m.EditPagePageModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
