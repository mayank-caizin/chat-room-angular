import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'cr-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message!: Message;
  @Input() receiver!: string;
  isSender: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isSender = this.message.sender === this.receiver;
  }

}
