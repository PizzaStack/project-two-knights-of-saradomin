import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  employeeId: number = 1;

  message: Message;

  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessagesById()
    .subscribe(data => this.messages = data);
  }

  loadMessages() {

    let messagesBlock = ``;

    let users = [];
    

    for (let i of this.messages){
      if(i.userid1 === this.employeeId){
        users.push(i.user2.firstname + ' ' + i.user2.lastname);
      } else {
        users.push(i.user1.firstname + ' ' + i.user1.lastname);
      }
    }


    let position = 0;
    for(let i of users){
      let count = 0;

      for(let j of users){
        if(i === j){
          count += 1;
        }
      }

      if(count > 1){
        users.splice(position, position + 1);
      }

      position += 1;

    }

    for (let k of users){
      messagesBlock = messagesBlock + `
      <button onclick="test()">${k}</button>
    `
    }

    document.getElementById("messages").innerHTML = messagesBlock;

  }
  
  test() {
  	alert("HAHAHA");
  }




}
