import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/posts' },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'new-post',
    loadChildren: () =>
      import('./new-post/new-post.module').then((m) => m.NewPostModule),
  },
  {
    path: '**',
    component: PostsComponent,
  },
];

@NgModule({
  declarations: [AppComponent, PostsComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
