import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { PostInteractions } from './postinteractions';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  userPost: Posts;

  private userposts = this.storage.getBaseUrl() + 'userposts';
  private addpostinteraction = this.storage.getBaseUrl() + 'addinteraction';
  private getpostinteraction = this.storage.getBaseUrl() + 'getinteractionsbyid';
  private deletepostinteraction = this.storage.getBaseUrl() + 'removeinteractionsbyid/';

  constructor(
    private http: HttpClient,
    private storage: StorageService
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

  deletePostInteraction(postid: number, userid: number): void {
    this.http.delete(this.deletepostinteraction + postid + '/' + userid).subscribe();
  }

  
}