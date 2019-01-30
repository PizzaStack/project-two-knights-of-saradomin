import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { PostInteractions} from './postinteractions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  userId = 1;

  userPost: Posts;

  private userposts = 'http://localhost:8080/userposts';
  private postinteraction = 'http://localhost:8080/addinteraction'

  constructor(
    private http: HttpClient
  ) { }

  getPostsById(): Observable<Posts[]> {
    return this.http.post<Posts[]>(this.userposts, this.userId);
  }

  addPostInteraction(body: any): void {
    this.http.post<PostInteractions[]>(this.postinteraction, body).subscribe();
  }

  getInteractionsById(): Observable<PostInteractions[]> {
    return this.http.post<PostInteractions[]>(this.postinteraction, this.userId);
  }
}
