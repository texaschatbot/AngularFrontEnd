import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LinkifyPipe } from './linkify.pipe';

import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forRoot([])
  ],
  declarations: [ChatDialogComponent, LinkifyPipe, CardComponent, Card1Component, Card2Component],
  exports: [ChatDialogComponent],
  providers: [ChatService, Card2Component, Card1Component]
})
export class ChatModule {

  
}
