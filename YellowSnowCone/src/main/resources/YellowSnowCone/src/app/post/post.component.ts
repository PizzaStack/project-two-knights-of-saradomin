import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';
import { PostInteractions } from '../postinteractions';
import { UserService } from '../user.service';
import { NewpostService } from '../newpost.service';
import { FriendService } from '../friend.service';
import { Friend } from '../friend';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = [];
  postInteractionsArray: PostInteractions[];
  postInteraction: PostInteractions;
  reposts: Posts;
  friends: Friend[];

  post: {
    content: string,
    name: string,
    id: number,
    id1: any,
    id2: any,
    postinteractions: PostInteractions[],
    src1: string,
    src2: string,
    likecount: number,
    dislikecount: number
  };

  interactionIdAndType: {
    postid: number,
    type: number
  };

  interactionIdAndTypeArray = [];

  postContent = [];

  // userId = this.userService.getLoggedInUsers()[0].userid;
  userId = parseInt(localStorage.getItem('token'));

  constructor(private postsService: PostsService, private userService: UserService, private newpostService: NewpostService, private friendService: FriendService) { }

  ngOnInit() {
    this.friendService.getFriendsById().subscribe(data => this.friends = data,
      (error: any) => console.log(error),
      () => {
        for (let i of this.friends) {
          if (i.userid1 === this.userId) {
            this.postsService.getPostsById(i.userid2).subscribe(data => this.posts = data,
              (error: any) => console.log(error), () => this.loadPosts());
          }
        }
      });
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
        src2: '../../assets/snowconeshadowupsidedown.png',
        likecount: 0,
        dislikecount: 0
      }
      this.postContent.push(this.post);
    }
    this.loadLikesAndDislikes();
  }

  loadLikesAndDislikes() {
    this.postContent.sort();
    for (let i of this.postContent) {
      for (let j of i.postinteractions) {
        if (this.userId === j.userid) {
          if (j.type === 1) {
            i.src1 = '../../assets/snowconelikeshadow.png';
          } else if (j.type === 0) {
            i.src2 = '../../assets/snowconedislikeshadowupsidedown.png';
          }
        }

        if (j.type === 1) {
          i.likecount++;
        } else if (j.type === 0) {
          i.dislikecount++;
        }
      }
    }
  }

  like(likeimg: any): void {
    const img = document.getElementById(likeimg) as HTMLImageElement;
    const likecount = document.getElementById('liked');
    const dislikecount = document.getElementById('disliked');

    let postId = likeimg.split(" ")[0];
    let dislikeimg = postId + ' dislike';
    postId = +postId;

    const img2 = document.getElementById(dislikeimg) as HTMLImageElement;

    if (img.src.split('/').pop() === 'snowconeshadow.png') {

      if (img2.src.split('/').pop() === 'snowconedislikeshadowupsidedown.png') {
        img2.src = '../../assets/snowconeshadowupsidedown.png';

        for (let i of this.postContent) {
          if (i.id === postId) {
            i.dislikecount--;
            dislikecount.innerHTML = `${i.dislikecount}`;
          }
        }

        this.postsService.deletePostInteraction(postId, this.userId);
      }

      img.src = '../../assets/snowconelikeshadow.png';

      this.postInteraction = {
        interactionid: null,
        postid: postId,
        userid: this.userId,
        type: 1
      }

      for (let i of this.postContent) {
        if (i.id === postId) {
          i.likecount++;
          likecount.innerHTML = `${i.likecount}`;
        }
      }

      this.postsService.addPostInteraction(this.postInteraction);

    } else if (img.src.split('/').pop() === 'snowconelikeshadow.png') {
      img.src = '../../assets/snowconeshadow.png';
      this.postsService.deletePostInteraction(postId, this.userId);

      for (let i of this.postContent) {
        if (i.id === postId) {
          i.likecount--;
          likecount.innerHTML = `${i.likecount}`;
        }
      }

    }
  }

  dislike(dislikeimg: any): void {
    const img = document.getElementById(dislikeimg) as HTMLImageElement;
    const likecount = document.getElementById('liked');
    const dislikecount = document.getElementById('disliked');

    let postId = dislikeimg.split(" ")[0];
    let likeimg = postId + ' like';
    postId = +postId;

    const img2 = document.getElementById(likeimg) as HTMLImageElement;

    if (img.src.split('/').pop() === 'snowconeshadowupsidedown.png') {

      if (img2.src.split('/').pop() === 'snowconelikeshadow.png') {
        img2.src = '../../assets/snowconeshadow.png';

        for (let i of this.postContent) {
          if (i.id === postId) {
            i.likecount--;
            likecount.innerHTML = `${i.likecount}`;
          }
        }

        this.postsService.deletePostInteraction(postId, this.userId);
      }

      img.src = '../../assets/snowconedislikeshadowupsidedown.png';

      this.postInteraction = {
        interactionid: null,
        postid: postId,
        userid: this.userId,
        type: 0
      }

      for (let i of this.postContent) {
        if (i.id === postId) {
          i.dislikecount++;
          dislikecount.innerHTML = `${i.dislikecount}`;
        }
      }

      this.postsService.addPostInteraction(this.postInteraction);

    } else if (img.src.split('/').pop() === 'snowconedislikeshadowupsidedown.png') {
      img.src = '../../assets/snowconeshadowupsidedown.png';
      this.postsService.deletePostInteraction(postId, this.userId);

      for (let i of this.postContent) {
        if (i.id === postId) {
          i.dislikecount--;
          dislikecount.innerHTML = `${i.dislikecount}`;
        }
      }
    }
  }

  repost(postid: any): void {
    new Promise((reject) => {
      this.postsService.getPostByPostId(postid).toPromise().then(data => {
        this.reposts = data;

        let user = {
          userid: parseInt(localStorage.getItem('token')),
          email: localStorage.getItem('email'),
          password: localStorage.getItem('password'),
          firstname: localStorage.getItem('firstName'),
          lastname: localStorage.getItem('lastName'),
          profilePicturePath: localStorage.getItem('profilePicturePath')
      };

        let post: Posts = {
          postid: null,
          userid: this.userId,
          textcontents: this.reposts.textcontents,
          imagelocation: this.reposts.imagelocation,
          repostid: this.reposts.postid,
          user: user,
          postinteractions: null
        };
        this.newpostService.createPost(post)
      },
        msg => {
          reject(msg)
        });
    });
  }
}
