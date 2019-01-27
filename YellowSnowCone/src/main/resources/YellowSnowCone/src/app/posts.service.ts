import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  userId: number = 1;

  userPost: Posts;

  constructor(
    private http: HttpClient
  ) { }
}
