import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { UserpostService } from '../userpost.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {
  posts: Posts[];
  post: {
    content: string;
  }
  postContent = [];
  
  constructor(
    private userpostService: UserpostService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userpostService.getPostsById(this.userService.getLoggedInUsers()[0].userid)
  }
  loadPosts() {
    for (const i of this.posts) {
      this.post = {
        content: i.textcontents,
       
      };
      this.postContent.push(this.post);
    }
    this.postContent = this.postContent.reverse();
  }

}