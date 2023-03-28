import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: ':id', component: DetailedPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
