import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { getPostsAction } from 'src/app/core/store/post/post.actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    console.log('🚀:PostRoutingModule:START', );
    this.store.dispatch(getPostsAction());
  }
}
