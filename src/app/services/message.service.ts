import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
  }
}
