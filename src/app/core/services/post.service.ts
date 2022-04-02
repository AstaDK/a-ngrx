import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private firebase: AngularFirestore) {}

  getPosts() {
    return this.firebase.collection<Post>('posts').valueChanges({
      idField: 'id',
    });
  }

  getPostById(id: string) {
    return this.firebase
      .collection<Post>('posts')
      .doc(id)
      .valueChanges({ idField: 'id' });
  }
}
