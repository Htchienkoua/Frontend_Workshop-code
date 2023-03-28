import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailablePostGuard } from '../guards/available-post.guard';
import { functionalAvailablePostGuard } from '../guards/functional-available-post.guard';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  {
    path: ':id',
    component: DetailedPostComponent,
    canActivate: [functionalAvailablePostGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
