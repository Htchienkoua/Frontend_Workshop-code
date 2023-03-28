import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  addPost(post: Post) {
    return this.httpClient.post<Post>('/api/posts', post);
  }

  getPosts() {
    return this.httpClient.get<Post[]>('/api/posts');
  }

  findPostsByTitle(title: string) {
    return this.httpClient.get<Post[]>(`/api/posts?title=${title}`);
  }

  getSinglePost(id: string) {
    return this.httpClient.get<Post>(`/api/posts/${id}`);
  }
}
