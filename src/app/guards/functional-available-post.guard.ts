import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { PostsService } from '../services/posts.service';

export const functionalAvailablePostGuard: CanActivateFn = (route, state) => {
  const id = route.paramMap.get('id');
  const router = inject(Router);
  if (id === null) {
    return of(router.createUrlTree(['/posts']));
  }
  return inject(PostsService)
    .getSinglePost(id)
    .pipe(
      map(() => true),
      catchError(() => of(router.createUrlTree(['/posts']))),
    );
};
