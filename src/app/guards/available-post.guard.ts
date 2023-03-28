import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root',
})
export class AvailablePostGuard implements CanActivate {
  constructor(private postsService: PostsService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const id = route.paramMap.get('id');
    if (id === null) {
      return of(this.router.createUrlTree(['/posts']));
    }
    return this.postsService.getSinglePost(id).pipe(
      map(() => true),
      catchError(() => of(this.router.createUrlTree(['/posts']))),
    );
  }
}
