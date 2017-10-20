import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../services/message.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-input-form',
  template: `
      <div class="row">
          <h4 class="col s12">Messages Form</h4>
      </div>
      <ul *ngIf="messages.length"
          materialize="collapsible"
          class="collapsible"
          data-collapsible="accordion">
          <li *ngFor="let message of messages"
              app-input-submit
              [id]="message.id"
              [message]="message.text"
              (update)="update.emit($event)">
          </li>
      </ul>
      <div *ngIf="!messages.length">No messages.</div>
  `,
  styles: []
})
export class InputFormComponent implements OnInit {

  constructor(private message: MessageService) {
  }

  @Output() update = new EventEmitter();

  messages = this.message.messages;

  ngOnInit() {
  }
}
