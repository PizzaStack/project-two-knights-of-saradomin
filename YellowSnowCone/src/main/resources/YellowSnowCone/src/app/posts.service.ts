import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  userId = 1;

  userPost: Posts;

  private postsUrl = 'http://localhost:8080/userposts';

  constructor(
    private http: HttpClient
  ) { }

  getPostsById(): Observable<Posts[]> {
    return this.http.post<Posts[]>(this.postsUrl, this.userId);
  }
}
