import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserpostService {

  userPost: Posts;

  // private userposts = 'http://localhost:8080/userposts';
  private userposts = this.storage.getBaseUrl() + "userposts";
  
  constructor(
    private http: HttpClient,
    private storage: StorageService,
  ) { }

  
  getPostsById(userId:number): Observable<Posts[]> {
    return this.http.post<Posts[]>(this.userposts, userId);
  }
}
