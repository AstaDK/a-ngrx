import { createFeatureSelector, createSelector } from "@ngrx/store";

const featurePost = createFeatureSelector("feature_post");

export const postsSelector = createSelector(featurePost, (state: any) => state.posts);
export const postSelector = createSelector(featurePost, (state: any) => state.currentItem);
export const postStatusSelector = createSelector(featurePost, (state: any) => state.status);
export const postErrorSelector = createSelector(featurePost, (state: any) => state.error);
