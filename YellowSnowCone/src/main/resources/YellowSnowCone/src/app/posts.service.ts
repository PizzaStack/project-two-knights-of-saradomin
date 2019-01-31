import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { PostInteractions } from './postinteractions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  userPost: Posts;

  private userposts = 'http://localhost:8080/userposts';
  private addpostinteraction = 'http://localhost:8080/addinteraction';
  private getpostinteraction = 'http://localhost:8080/getinteractionsbyid';
  private postbyid = 'http://localhost:8080/postbyid';

  constructor(
    private http: HttpClient
  ) { }

  getPostsById(userId: number): Observable<Posts[]> {
    return this.http.post<Posts[]>(this.userposts, userId);
  }

  addPostInteraction(body: any): void {
    this.http.post(this.addpostinteraction, body).subscribe();
  }

  getInteractionsById(userId: number): Observable<PostInteractions[]> {
    return this.http.post<PostInteractions[]>(this.getpostinteraction, userId);
  }
}