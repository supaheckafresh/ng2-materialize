import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  messages = [
    { id: 1, text: 'message 1' },
    { id: 2, text: 'message 2' },
    { id: 3, text: 'message 3' }
  ];

}
