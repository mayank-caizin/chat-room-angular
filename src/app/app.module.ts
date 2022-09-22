import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatboxComponent } from './chats/chatbox/chatbox.component';
import { MessageComponent } from './chats/messages/message.component';
import { ConvertTimeToStringPipe } from './shared/convert-time-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    MessageComponent,
    ConvertTimeToStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
