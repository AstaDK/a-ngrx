import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PostService } from '../../services/post.service';
import { mapTimeStamp } from '../../utils/operations.util';
import * as postActions from './post.actions';
import { of } from 'rxjs';
@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.getPostsAction),
      mergeMap(() => this.postService.getPosts()),
      mapTimeStamp(),
      map((posts) => postActions.getPostsSuccessAction({ posts })),
      catchError((error) => of(postActions.getPostsErrorAction({ error })))
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {}
}
