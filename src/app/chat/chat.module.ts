import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';

import { LinkifyPipe } from './linkify.pipe';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  declarations: [ChatDialogComponent, LinkifyPipe],
  exports: [ChatDialogComponent],
  providers: [ChatService]
})
export class ChatModule {

  
}
