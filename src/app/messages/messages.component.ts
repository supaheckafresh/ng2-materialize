import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  template: `
    <ul *ngIf="messages.length">
        <li *ngFor="let message of messages">{{message.text}}</li>
    </ul>
    <div *ngIf="!messages.length">No messages.</div>
  `,
  styles: []
})

export class MessagesComponent implements OnInit {

  constructor(private message: MessageService) { }

  messages = this.message.messages;

  ngOnInit() {
  }

}
