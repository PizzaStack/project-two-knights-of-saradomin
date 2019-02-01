import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';
import { PostInteractions } from '../postinteractions';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Posts[];
  postInteractionsArray: PostInteractions[];
  postInteraction: PostInteractions;

  post: {
    content: string;
    name: string;
    id: number;
    id1: any;
    id2: any;
    postinteractions: PostInteractions[],
    src1: string,
    src2: string
  };

  interactionIdAndType: {
    postid: number,
    type: number
  };

  interactionIdAndTypeArray = [];

  postContent = [];

  userId = this.userService.getLoggedInUsers()[0].userid;

  constructor(private postsService: PostsService, private userService: UserService) { }

  ngOnInit() {
    this.postsService.getPostsById(this.userId)
      .subscribe(data => this.posts = data, (error: any) => console.log(error), () => this.loadPosts());
  }

  loadPosts() {
    for (const i of this.posts) {
      this.post = {
        content: i.textcontents,
        name: i.user.firstname + " " + i.user.lastname,
        id: i.postid,
        id1: i.postid + ' like',
        id2: i.postid + ' dislike',
        postinteractions: i.postinteractions,
        src1: '../../assets/snowconeshadow.png',
        src2: '../../assets/snowconeshadowupsidedown.png'
      };
      this.postContent.push(this.post);
    }
    this.postContent = this.postContent.reverse();
    this.loadLikesAndDislikes();
  }

  loadLikesAndDislikes() {
    for (let i of this.postContent) {
      for (let j of i.postinteractions) {
        if (this.userId === j.userid) {
          if (j.type === 1) {
            i.src1 = '../../assets/snowconelikeshadow.png';
          } else if (j.type === 0) {
            i.src2 = '../../assets/snowconedislikeshadowupsidedown.png';
          }
        }
      }
    }
  }

  like(likeimg: any): void {
    const img = document.getElementById(likeimg) as HTMLImageElement;

    let postId = likeimg.split(" ")[0];
    let dislikeimg = postId + ' dislike';
    postId = +postId;

    const img2 = document.getElementById(dislikeimg) as HTMLImageElement;

    if (img.src.split('/').pop() === 'snowconeshadow.png') {

      if (img2.src.split('/').pop() === 'snowconedislikeshadowupsidedown.png') {
        img2.src = '../../assets/snowconeshadowupsidedown.png';
        this.postsService.deletePostInteraction(postId, this.userId);
      }

      img.src = '../../assets/snowconelikeshadow.png';

      this.postInteraction = {
        interactionid: null,
        postid: postId,
        userid: this.userId,
        type: 1
      }

      this.postsService.addPostInteraction(this.postInteraction);

    } else if (img.src.split('/').pop() === 'snowconelikeshadow.png') {
      img.src = '../../assets/snowconeshadow.png';
      this.postsService.deletePostInteraction(postId, this.userId);
    }
  }

  dislike(dislikeimg: any): void {
    const img = document.getElementById(dislikeimg) as HTMLImageElement;

    let postId = dislikeimg.split(" ")[0];
    let likeimg = postId + ' like';
    postId = +postId;

    const img2 = document.getElementById(likeimg) as HTMLImageElement;

    if (img.src.split('/').pop() === 'snowconeshadowupsidedown.png') {

      if (img2.src.split('/').pop() === 'snowconelikeshadow.png') {
        img2.src = '../../assets/snowconeshadow.png';
        this.postsService.deletePostInteraction(postId, this.userId);
      }

      img.src = '../../assets/snowconedislikeshadowupsidedown.png';

      this.postInteraction = {
        interactionid: null,
        postid: postId,
        userid: this.userId,
        type: 0
      }

      this.postsService.addPostInteraction(this.postInteraction);

    } else if (img.src.split('/').pop() === 'snowconedislikeshadowupsidedown.png') {
      img.src = '../../assets/snowconeshadowupsidedown.png';
      this.postsService.deletePostInteraction(postId, this.userId);
    }
  }
}
