import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-input-submit, [app-input-submit]',
  templateUrl: './input-submit.component.html',
  styleUrls: ['./input-submit.component.css']
})
export class InputSubmitComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  @Input() id;
  @Input() message;

  ngOnInit() {
  }
}
