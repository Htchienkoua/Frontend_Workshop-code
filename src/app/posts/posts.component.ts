import { Component } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, switchMap } from 'rxjs';
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

  filterPosts(filter: string) {
    this.posts$ = this.postsService
      .getPosts()
      .pipe(
        map((posts) => posts.filter((post) => post.title.includes(filter))),
      );
  }
}
