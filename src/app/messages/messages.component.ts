import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-messages',
  template: `
      <ul *ngIf="messages.length">
          <li *ngFor="let message of messages">{{message.text}}</li>
      </ul>
      <div *ngIf="!messages.length">No messages.</div>
      <app-input-form></app-input-form>
  `,
  styles: []
})

export class MessagesComponent implements OnInit {

  constructor(private message: MessageService) {
    this.message.messageSubject.subscribe(this.onUpdate.bind(this));
  }

  messages = this.message.messages;

  ngOnInit() {
  }

  onUpdate(message): void {
    console.log('HERE', message);
    _(this.messages)
      .chain()
      .find([ 'id', message.id ])
      .thru(msg => this.messages.splice(_.indexOf(this.messages, msg), 1, message))
      .value();
  }
}
