import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ReviewFeedbackComponent } from './review-feedback/review-feedback.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminComponent, LoginComponent, ReviewFeedbackComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ]
})
export class AdminModule { }
