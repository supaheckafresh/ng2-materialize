import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-submit, [app-input-submit]',
  templateUrl: './input-submit.component.html',
  styleUrls: ['./input-submit.component.css']
})
export class InputSubmitComponent implements OnInit {

  constructor() { }

  @Input() message;
  @Output() update = new EventEmitter();

  ngOnInit() {
  }
}
