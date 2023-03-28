import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PostsModule } from './posts/posts.module';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/posts' },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'new-post',
    loadChildren: () =>
      import('./new-post/new-post.module').then((m) => m.NewPostModule),
  },
  {
    path: '**',
    redirectTo: '/posts',
  },
];

@NgModule({
  declarations: [AppComponent, MainMenuComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
