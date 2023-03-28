import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getPosts();
  }
}
