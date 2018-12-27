import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';

import { environment } from './../../environments/environment';

import { LinkifyPipe } from './linkify.pipe';

import { RouterModule } from '@angular/router';
import { ReadMoreComponent } from './read-more/read.more.component';
import { HelpService } from './help.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { HelpComponent } from './help/help.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { VoteComponent } from './vote/vote.component';
import { VoteService } from './vote.service';

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
  declarations: [ChatDialogComponent, 
                LinkifyPipe, ReadMoreComponent, FooterComponent, 
                HeaderComponent, ChatboxComponent, HelpComponent, VoteComponent],
  exports: [ChatDialogComponent],
  providers: [ChatService, HelpService, VoteService, ChatboxComponent],
})
export class ChatModule {
}
