import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Injectable()
export class MessageService {

  constructor() { }

  public messages = [
    { id: 1, text: 'message 1' },
    { id: 2, text: 'message 2' },
    { id: 3, text: 'message 3' },
    { id: 4, text: 'four' },
    { id: 5, text: 'cinco' }
  ];

  public messageSubject: BehaviorSubject<object> = new BehaviorSubject(this.messages[this.messages.length - 1]);

  public update(message): void {
    this.broadcast(message);

    _(this.messages)
      .chain()
      .find([ 'id', message.id ])
      .thru(msg => _.assign(msg, message))
      .value();
  }

  private broadcast(message): void {
    this.messageSubject.next(message);
  }
}
