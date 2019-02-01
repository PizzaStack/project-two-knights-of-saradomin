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
    content: string,
    name: string
  }
  postContent = [];
  
  userId: number = 0

  constructor(
    private userpostService: UserpostService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userId = this.userService.getLoggedInUsers()[0].userid;
    this.userpostService.getPostsById(this.userId).subscribe(data => this.posts = data,(error: any) => console.log(error),()=>this.loadPosts())
    
  }
  loadPosts() {
    console.log(this.userId)
    for (const i of this.posts) {
      this.post = {
        content: i.textcontents, 
        name: i.user.firstname + " " + i.user.lastname
      };
      this.postContent.push(this.post);
    }
    this.postContent = this.postContent.reverse();
  }

}