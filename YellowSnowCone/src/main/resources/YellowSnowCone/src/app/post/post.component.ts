import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Posts[];
  postContent = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPostsById()
      .subscribe(data => this.posts = data);
  }

  loadPosts() {
    for(let i of this.posts) {
      this.postContent.push(i.textcontents);
    }
  }
}
