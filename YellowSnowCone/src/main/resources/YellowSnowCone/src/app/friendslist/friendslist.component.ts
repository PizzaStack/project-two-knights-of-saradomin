import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { Friend } from '../friend';
import { UserService } from '../user.service';
import { StorageService } from '../storage.service';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-friendslist',
  templateUrl: './friendslist.component.html',
  styleUrls: ['./friendslist.component.css']
})
export class FriendslistComponent implements OnInit {

  friends: Friend[] = [];

  userid: number = 0;

  users = [];

  messages: Message[];

  specificMessage: string;

  specificMessages: string[] = [];

  constructor(private friendService: FriendService, private userService : UserService, private storage: StorageService, private messageService: MessageService) { }

  ngOnInit() {
    this.friendService.getFriendsById().subscribe(data => this.friends = data,(error: any) => console.log(error),() => this.loadFriends());
    // this.userid = this.userService.getLoggedInUsers()[0].userid;
    this.userid = parseInt(localStorage.getItem('token'));
    this.messageService.getMessagesById()
    .subscribe(data => this.messages = data);
  }

  viewProfile(searchResult){
    localStorage.setItem("otherFirstName", searchResult.firstname);
    localStorage.setItem("otherLastName", searchResult.lastname);
    localStorage.setItem("otherUserId", searchResult.userid);
  }

  loadFriends(){
    if(this.friends){
      for(let i of this.friends){
        if(this.userid === i.userid1){
          this.users.push(i.user2);
        } else if(this.userid === i.userid2){
          this.users.push(i.user1);
        }
      }
    }

    this.users.reverse();
    
  }


  populateMessageThread(user: string) {

    this.storage.setMessageThreadUser(user);
    for(let i of this.friends){
      if(i.userid1 === this.userid){
        if(user === (i.user2.firstname + ' ' + i.user2.lastname)){
          this.storage.setUserId2(i.user2.userid);
          this.storage.setUser1(i.user1);
          this.storage.setUser2(i.user2);
        }
      } else {
        if(user === (i.user1.firstname + ' ' + i.user1.lastname)){
          this.storage.setUserId2(i.user1.userid);
          this.storage.setUser1(i.user2);
          this.storage.setUser2(i.user1);
        }
      }
    }

    this.storage.setUserId1(this.userid);


  }

}
