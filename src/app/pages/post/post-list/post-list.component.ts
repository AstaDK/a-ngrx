import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { Post } from 'src/app/core/models/post.model';
import { getPostsAction } from 'src/app/core/store/post/post.actions';
import {
  postsSelector,
  postStatusSelector,
} from 'src/app/core/store/post/post.selectors';
import { vmFromLatest } from 'src/app/core/utils/operations.util';

interface PostListVm {
  posts: Post[];
  isLoading: boolean;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  vm$: Observable<PostListVm>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    console.log('🚀:PostRoutingModule:START');
    this.store.dispatch(getPostsAction());

    this.vm$ = vmFromLatest<PostListVm>({
      posts: this.store.pipe(select(postsSelector)),
      isLoading: this.store.pipe(
        select(postStatusSelector),
        map((status) => status === 'loading')
      ),
    });
  }
}
