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
      <app-input-form (update)="onUpdate($event)"></app-input-form>
  `,
  styles: []
})

export class MessagesComponent implements OnInit {

  constructor(private message: MessageService) {
  }

  messages = this.message.messages;

  ngOnInit() {
  }

  onUpdate(message): void {
    _(this.messages)
      .chain()
      .find([ 'id', message.id ])
      .thru(msg => this.messages.splice(_.indexOf(this.messages, msg), 1, message))
      .value();
  }
}
