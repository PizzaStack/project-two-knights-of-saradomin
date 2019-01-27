import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  userId: number = 1;

  userPost: Posts = [];

  constructor(
    private http: HttpClient
  ) { }
}
