import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { FilterPostsComponent } from './filter-posts/filter-posts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';

@NgModule({
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule],
  declarations: [FilterPostsComponent, PostsComponent, DetailedPostComponent],
})
export class PostsModule {}
