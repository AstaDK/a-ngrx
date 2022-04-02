import * as PostActions from './post.actions';
import { PostState } from './post.state';

const initialState: PostState = {
  items: [],
  currentItem: null,
  status: 'idle',
  error: null,
};

export function postReducer(
  state: PostState = initialState,
  action: PostActions.PostActions
): PostState {
  switch (action.type) {
    case PostActions.GET_POSTS:
      return {
        ...state,
        status: 'loading',
      };

    case PostActions.GET_POSTS_SUCCESS:
      return {
        ...state,
        items: action.posts,
        status: 'success',
      };

    case PostActions.GET_POSTS_ERROR:
      return {
        ...state,
        error: action.error,
        status: 'error',
      };

    case PostActions.GET_POST:
      return {
        ...state,
        status: 'loading',
      };

    case PostActions.CREATE_POST:
      return {
        ...state,
        status: 'loading',
      };

    case PostActions.UPDATE_POST:
      return {
        ...state,
        status: 'loading',
      };

    default:
      return state;
  }
}
