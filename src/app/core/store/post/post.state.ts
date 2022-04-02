import { Post } from '../../models/post.model';

export interface PostState {
  items: Post[];
  currentItem: Post;
  status: 'idle' | 'loading' | 'success' | 'error';
  error?: string;
}
