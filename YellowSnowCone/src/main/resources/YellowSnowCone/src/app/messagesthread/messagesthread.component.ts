import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { MessageService } from '../message.service';
import { addMessageStatus } from '../addMessageStatus';
import { Message } from '../message';
import { Users } from '../users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-messagesthread',
  templateUrl: './messagesthread.component.html',
  styleUrls: ['./messagesthread.component.css']
})
export class MessagesthreadComponent implements OnInit {

  messageTimerId;

  userid: number = 0;

  specificMessages: string[] = [];

  textContents: string;

  userId1: number;

  userId2: number;

  user1: Users;

  user2: Users;

  message: Message;

  addMessageStatus: addMessageStatus;

  messages: Message[] = [];

  users = [];
  
  specificMessage: string;

  newSpecificMessage: string;

  newSpecificMessages: string[] = [];

  specificMessagesLengthOriginal: number = 0;

  specificMessagesLengthNew: number = 0;


  constructor(private messageService: MessageService, private storage: StorageService, private userService: UserService) { }

  ngOnInit() {
    this.specificMessages = this.storage.getScope();
    this.userId1 = this.storage.getUserId1();
    this.userId2 = this.storage.getUserId2();
    this.user1 = this.storage.getUser1();
    this.user2 = this.storage.getUser2();
    this.userid = this.userService.getLoggedInUsers()[0].userid;
    this.messageService.getMessagesById()
      .subscribe(data => this.messages = data,(err) => console.log(err),() => this.loadMessages());
    this.messageTimerId = setInterval(() => {
      this.refreshMessages();
    }, 1000);
    this.storage.setMessageTimerId(this.messageTimerId);
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
  }

  refreshMessages(){
      this.newSpecificMessages = [];
      this.messageService.getMessagesById()
      .subscribe(data => this.messages = data,(err) => console.log(err),() => this.loadMessages());
  }

  loadMessages() {
    this.storage.setUserId1(this.userid);
    for (let i of this.messages) {
      if (i.userid1 === this.userid) {
        
        if (this.storage.getMessageThreadUser() === (i.user2.firstname + ' ' + i.user2.lastname)) {
          
          this.newSpecificMessage = "Me: " + i.textcontents;
          this.newSpecificMessages.push(this.newSpecificMessage);
          this.storage.setUserId2(i.user2.userid);
          this.storage.setUser1(i.user1);
          this.storage.setUser2(i.user2);
        }
      } else {

        if (this.storage.getMessageThreadUser() === (i.user1.firstname + ' ' + i.user1.lastname)) {
          
          this.newSpecificMessage = i.user1.firstname + " " + i.user1.lastname + ": " + i.textcontents;
          this.newSpecificMessages.push(this.newSpecificMessage);
          this.storage.setUserId2(i.user1.userid);
          this.storage.setUser1(i.user2);
          this.storage.setUser2(i.user1);
        }
      }
    }

    this.specificMessagesLengthOriginal = this.specificMessages.length;

    this.specificMessagesLengthNew = this.newSpecificMessages.length;

    if(this.specificMessagesLengthNew > this.specificMessagesLengthOriginal){
      this.specificMessages = this.newSpecificMessages;
    }
  }




  

}
