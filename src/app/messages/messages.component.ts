import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition } from '@angular/animations';

import { Animations } from '../animations/animations';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-messages',
  template: `
      <ul *ngIf="messages.length">
          <li *ngFor="let message of messages"
              [ngClass]="{ updated: wasUpdated(message.id) }"
              [@messageUpdated]="animateMessage(message.id)"
              (@messageUpdated.done)="updatedDone()">
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
  ],
  animations: [
    trigger('messageUpdated', [  transition('* => true', Animations.POP_OUT) ])
  ]
})

export class MessagesComponent implements OnInit {

  constructor(private message: MessageService) {
    this.message.messageSubject.subscribe(this.onUpdate.bind(this));
  }

  messages = this.message.messages;
  lastUpdatedId = null;
  _animate = false;

  ngOnInit() {
    this.lastUpdatedId = null;
  }

  public animateMessage(messageId): boolean {
    return this._animate && this.wasUpdated(messageId);
  }

  public updatedDone(): void {
    this._animate = false;
  }

  public wasUpdated(messageId): boolean {
    return this.lastUpdatedId === messageId;
  }

  private onUpdate(message): void {
    this.lastUpdatedId = message.id;
    this._animate = true;
  }
}
