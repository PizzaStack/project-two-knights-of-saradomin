import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { MessageService } from '../message.service';
import { addMessageStatus } from '../addMessageStatus';
import { Message } from '../message';
import { Users } from '../users';

@Component({
  selector: 'app-messagesthread',
  templateUrl: './messagesthread.component.html',
  styleUrls: ['./messagesthread.component.css']
})
export class MessagesthreadComponent implements OnInit {

  specificMessages: string[];

  textContents: string;

  userId1: number;

  userId2: number;

  user1: Users;

  user2: Users;

  message: Message;

  addMessageStatus: addMessageStatus;


  constructor(private messageService: MessageService, private storage: StorageService) { }

  ngOnInit() {
    this.specificMessages = this.storage.getScope();
    this.userId1 = this.storage.getUserId1();
    this.userId2 = this.storage.getUserId2();
    this.user1 = this.storage.getUser1();
    this.user2 = this.storage.getUser2();
  }

  send(messageContent) {
      this.message = {
        messageid: null,
        textcontents: messageContent.value,
        userid1: this.userId1,
        userid2: this.userId2,
        status: 0,
        user1: this.user1,
        user2: this.user2
      };
      this.messageService.addMessage(this.message);
      this.specificMessages.push("Me: " + messageContent.value);
  }
}