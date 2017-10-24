import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  template: `
      <ul *ngIf="messages.length">
          <li *ngFor="let message of messages"
              [ngClass]="{ updated: wasUpdated(message.id) }">
              {{message.text}}
          </li>
      </ul>
      <div *ngIf="!messages.length">No messages.</div>
      <app-input-form></app-input-form>
  `,
  styles: [
    `
      .updated {
          font-weight: bold;
      }
    `
  ]
})

export class MessagesComponent implements OnInit {

  constructor(private message: MessageService) {
    this.message.messageSubject.subscribe(this.onUpdate.bind(this));
  }

  messages = this.message.messages;
  lastUpdatedId = null;

  ngOnInit() {
    this.lastUpdatedId = null;
  }

  public wasUpdated(messageId): boolean {
    return this.lastUpdatedId === messageId;
  }

  private onUpdate(message): void {
    this.lastUpdatedId = message.id;
  }
}
