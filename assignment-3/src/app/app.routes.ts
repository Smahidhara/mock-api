import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full'}, 
  { path: 'posts', component: PostListComponent}, 
  { path: 'post/:id', component: PostDetailsComponent}
];

@NgModule ({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {} 
