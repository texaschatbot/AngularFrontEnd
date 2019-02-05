import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ReviewFeedbackComponent } from './review-feedback/review-feedback.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthguardService } from './authguard.service';
import { ChatDialogComponent } from '../chat/chat-dialog/chat-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [AdminComponent, LoginComponent, ReviewFeedbackComponent, NavbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            children: [
              { path: '', component: LoginComponent },
              { path: 'login', component: LoginComponent },
              {
                path: 'review-feedback', component: ReviewFeedbackComponent, canActivate: [AuthguardService]
              },
              { path: '**', component: LoginComponent },


            ],
          }
        ]
      },
      { path: 'chat', component: ChatDialogComponent }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    GoogleChartsModule.forRoot()
  ]
})
export class AdminModule { }
