import { Component, OnInit} from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-messagesthread',
  templateUrl: './messagesthread.component.html',
  styleUrls: ['./messagesthread.component.css']
})
export class MessagesthreadComponent implements OnInit {

  specificMessages: string[];

  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.specificMessages = this.storage.getScope();
  }

  

}
