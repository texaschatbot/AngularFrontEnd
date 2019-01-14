import { Component, HostListener } from '@angular/core';
import 'rxjs/add/operator/scan';
import { FeedbackSection } from '../feedback.section';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent {

  feedbackSection: FeedbackSection = new FeedbackSection('none', 'none', '', 0, 0, 0);

  constructor(private feedbackComponent: FeedbackComponent) {

  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.feedbackComponent.feedbackSection = this.feedbackSection;
      this.feedbackComponent.resetFeedbackForm();
    }
  }
}
