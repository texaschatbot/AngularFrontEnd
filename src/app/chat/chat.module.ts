import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';

import { environment } from './../../environments/environment';

import { LinkifyPipe } from './linkify.pipe';

import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { VoteComponent } from './vote/vote.component';
import { VoteService } from './vote.service';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { ReadMoreComponent } from './read-more/read.more.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [ChatDialogComponent, ChatboxComponent,
    FeedbackComponent, FooterComponent, HeaderComponent,
    HelpComponent, ReadMoreComponent,
    LinkifyPipe, VoteComponent],
  exports: [ChatDialogComponent],
  providers: [ChatService, VoteService, ChatboxComponent, FeedbackComponent],
})
export class ChatModule {
}

