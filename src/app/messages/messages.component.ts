import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  template: `
      <ul *ngIf="messages.length">
          <li *ngFor="let message of messages"
              [ngClass]="{ updated: wasUpdated(message.id) }"
              [@updated]="animateMessage(message.id)"
              (@updated.done)="updatedDone()">
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
    trigger('updated', [
      state('true', style({ transform: 'scale(1)' })),
      transition('* => true', animate(200, keyframes([
        style({ transform: 'scale(1.3)', offset: 0 }),
        style({ transform: 'scale(1.1)', color: 'green', offset: 0.1 }),
        style({ transform: 'scale(1)', color: 'black', offset: 1.0 })
      ])))
    ])
  ]
})

export class MessagesComponent implements OnInit {

  constructor(private message: MessageService) {
    this.message.messageSubject.subscribe(this.onUpdate.bind(this));
  }

  messages = this.message.messages;
  lastUpdatedId = null;
  _animate = null;

  ngOnInit() {
    this.lastUpdatedId = null;
  }

  public animateMessage(messageId): boolean {
    return this._animate === messageId;
  }

  public updatedDone(): void {
    this._animate = null;
  }

  public wasUpdated(messageId): boolean {
    return this.lastUpdatedId === messageId;
  }

  private onUpdate(message): void {
    this.lastUpdatedId = message.id;
    this._animate = message.id;
  }
}
