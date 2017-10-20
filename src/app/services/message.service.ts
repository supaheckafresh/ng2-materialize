import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Injectable()
export class MessageService {

  constructor() { }

  public messages = [
    { id: 1, text: 'message 1' },
    { id: 2, text: 'message 2' },
    { id: 3, text: 'message 3' }
  ];

  public messageSubject: BehaviorSubject<object> = new BehaviorSubject(this.messages[this.messages.length - 1]);

  public update(message): void {
    this.messageSubject.next(message);

    _(this.messages)
      .chain()
      .find([ 'id', message.id ])
      .thru(msg => this.messages.splice(_.indexOf(this.messages, msg), 1, message))
      .value();
  }
}
