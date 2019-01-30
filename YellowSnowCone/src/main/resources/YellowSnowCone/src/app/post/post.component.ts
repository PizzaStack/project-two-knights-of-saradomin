import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';
import { PostinteractionsService } from '../postinteractions.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Posts[];

  post: {
    content: string;
    id1: any;
    id2: any;
  }

  postContent = [];

  constructor(private postsService: PostsService, private postInteractionsService: PostinteractionsService) { }

  ngOnInit() {
    this.postsService.getPostsById()
      .subscribe(data => this.posts = data, (error: any) => console.log(error), () => this.loadPosts());
  }

  loadPosts() {
    for (let i of this.posts) {
      this.post = {
        content: i.textcontents,
        id1: i.postid + 'like',
        id2: i.postid + 'dislike'
      }
      this.postContent.push(this.post);
    }
    this.postContent = this.postContent.reverse();
  }

  like(likeimg: any): void {
    let img = document.getElementById(likeimg) as HTMLImageElement;

    if (img.src.split("/").pop() === "snowconeshadow.png") {
      img.src = "../../assets/snowconelikeshadow.png"
    } else if (img.src.split("/").pop() === "snowconelikeshadow.png") {
      img.src = "../../assets/snowconeshadow.png"
    }
  }

  dislike(dislikeimg: any): void {
    let img = document.getElementById(dislikeimg) as HTMLImageElement;

    if (img.src.split("/").pop() === "snowconeshadowupsidedown.png") {
      img.src = "../../assets/snowconedislikeshadowupsidedown.png"
    } else if (img.src.split("/").pop() === "snowconedislikeshadowupsidedown.png") {
      img.src = "../../assets/snowconeshadowupsidedown.png"
    }
  }
}
