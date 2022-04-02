import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './store/post/post.reducer';

@NgModule({
  imports: [StoreModule.forFeature('feature_post', postReducer)],
})
export class CoreModule {}
