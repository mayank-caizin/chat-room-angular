import { Component } from '@angular/core';
// import { ViewChild, ViewContainerRef } from '@angular/core';
import { ChatboxComponent } from './chats/chatbox/chatbox.component';

@Component({
  selector: 'cr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  // @ViewChild('chatContainer', { read: ViewContainerRef }) chatContainer!: ViewContainerRef;

  title = 'Chat Room';
  users: string[] = [];

  private _newUser = '';
  get newUser(): string {
    return this._newUser;
  }
  set newUser(value: string) {
    this._newUser = value;
  }

  createChat() {
    if(!this.newUser) return;

    this.users.push(this.newUser);

    // const chat = this.chatContainer.createComponent(ChatboxComponent);
    // chat.instance.name = this.newUser;
    // chat.instance.myComponentRef = chat;

    this.newUser = '';
  }
}
