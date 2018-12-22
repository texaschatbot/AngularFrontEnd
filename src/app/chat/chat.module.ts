import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';

import { LinkifyPipe } from './linkify.pipe';

import { RouterModule } from '@angular/router';
import { ReadMoreComponent } from './read-more/read.more.component';
import { HelpService } from './help.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  declarations: [ChatDialogComponent, 
                LinkifyPipe, ReadMoreComponent, FooterComponent, 
                HeaderComponent, ChatboxComponent, HelpComponent],
  exports: [ChatDialogComponent],
  providers: [ChatService, HelpService, ChatboxComponent],
})
export class ChatModule {
}
