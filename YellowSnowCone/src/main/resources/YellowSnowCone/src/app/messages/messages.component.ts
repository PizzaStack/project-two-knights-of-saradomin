import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  userid: number = 1;

  message: Message;

  messages: Message[];

  specificMessage: string;

  specificMessages: string[] = [];

  users = [];

  constructor(private messageService: MessageService, private storage: StorageService) { }

  ngOnInit() {
    this.messageService.getMessagesById()
    .subscribe(data => this.messages = data);
  }

  populateMessageThread(user: string) {

    for (let i of this.messages){
      if(i.userid1 === this.userid){
        if(user === (i.user2.firstname + ' ' + i.user2.lastname)){
          this.specificMessage = "Me: " + i.textcontents;
          this.specificMessages.push(this.specificMessage);
        }
      } else {
        if(user === (i.user1.firstname + ' ' + i.user1.lastname)){
          this.specificMessage = i.user1.firstname + " " + i.user1.lastname + ": " + i.textcontents;
          this.specificMessages.push(this.specificMessage);
        }
      }
    }

    this.storage.setScope(this.specificMessages);

  }

  loadMessages() {

    for (let i of this.messages){
      if(i.userid1 === this.userid){
        this.users.push(i.user2.firstname + ' ' + i.user2.lastname);
      } else {
        this.users.push(i.user1.firstname + ' ' + i.user1.lastname);
      }
    }


    let position = 0;
    for(let i of this.users){
      let count = 0;

      for(let j of this.users){
        if(i === j){
          count += 1;
        }
      }

      if(count > 1){
        this.users.splice(position, position + 1);
      }

      position += 1;

    }

  }
  


}
