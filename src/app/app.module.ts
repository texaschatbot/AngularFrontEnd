import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChatModule } from './chat/chat.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@angular/router';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    AdminModule,
    RouterModule.forRoot([
      { path: '', component: ChatDialogComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
