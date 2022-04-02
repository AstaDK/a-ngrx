import { ActionType, createAction, props } from "@ngrx/store";
import { Post } from "../../models/post.model";

export const GET_POST = '[Post] Get';
export const GET_POSTS = '[Post] Get all';
export const CREATE_POST = '[Post] Create';
export const UPDATE_POST = '[Post] Update';
export const GET_POSTS_ERROR = '[Post] Get all error';
export const GET_POSTS_SUCCESS = '[Post] Get all success';

export const updatePostAction = createAction(UPDATE_POST, props<{ post: Post }>());
export const getPostAction = createAction(GET_POST, props<{ id: number }>());
export const getPostsAction = createAction(GET_POSTS);
export const createPostAction = createAction(CREATE_POST, props<{ post: Post }>());
export const getPostsErrorAction = createAction(GET_POSTS_ERROR, props<{ error: string }>());
export const getPostsSuccessAction = createAction(GET_POSTS_SUCCESS, props<{ posts: Post[] }>());

export type PostActions =
  | ActionType<typeof getPostAction>
  | ActionType<typeof getPostsAction>
  | ActionType<typeof createPostAction>
  | ActionType<typeof updatePostAction>
  | ActionType<typeof getPostsErrorAction>
  | ActionType<typeof getPostsSuccessAction>;