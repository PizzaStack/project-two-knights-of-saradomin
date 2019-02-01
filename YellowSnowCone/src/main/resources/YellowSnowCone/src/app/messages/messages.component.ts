import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message';
import { StorageService } from '../storage.service';
import { Users } from '../users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  userid: number = 0;

  message: Message;

  messages: Message[];

  specificMessage: string;

  specificMessages: string[] = [];

  users = [];

  constructor(private messageService: MessageService, private storage: StorageService, private userService: UserService) { }

  ngOnInit() {
    this.messageService.getMessagesById()
    .subscribe(data => this.messages = data,(err) => console.log(err),() => this.loadMessages());
    this.userid = this.userService.getLoggedInUsers()[0].userid;
  }

  loadMessages() {
    for (let i of this.messages) {
      if (i.userid1 === this.userid) {
        this.users.push(i.user2.firstname + ' ' + i.user2.lastname);
      } else {
        this.users.push(i.user1.firstname + ' ' + i.user1.lastname);
      }
    }
    this.users = this.users.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    })

    this.users.reverse();

  }

  populateMessageThread(user: string) {
    this.storage.setMessageThreadUser(user);

    for(let i of this.messages){
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
