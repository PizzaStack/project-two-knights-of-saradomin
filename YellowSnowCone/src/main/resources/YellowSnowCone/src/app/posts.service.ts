import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { PostInteractions} from './postinteractions';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  userId = this.userService.getLoggedInUsers()[0].userid;

  userPost: Posts;

  private userposts = 'http://localhost:8080/userposts';
  private postinteraction = 'http://localhost:8080/addinteraction'

  constructor(
    private http: HttpClient,
    private userService: UserService
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
