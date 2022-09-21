import { Component, OnChanges, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { ChatboxComponent } from './chats/chatbox/chatbox.component';

@Component({
  selector: 'cr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  @ViewChild('chatContainer', { read: ViewContainerRef })
  chatContainer!: ViewContainerRef;

  title = 'Chat Room';

  private _chatName = '';
  get chatName(): string {
    return this._chatName;
  }
  set chatName(value: string) {
    this._chatName = value;
  }

  createChat() {
    const chat = this.chatContainer.createComponent(ChatboxComponent);
    chat.instance.name = this.chatName;
    this.chatName = '';
  }

  removeChat() {
    //
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.chatName);
  }
}
