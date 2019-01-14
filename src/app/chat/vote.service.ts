import { Injectable } from '@angular/core';
import { ChatService } from './chat.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FeedbackSection } from './feedback.section';


@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private feedbackCollection: AngularFirestoreCollection<any>;
  private feedbackCollection1: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore, private chatService: ChatService) {
    this.feedbackCollection = this.afs.collection<any>('/feedback');
  }

  upVote() {
    this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
      var currentValue = doc.data().upVote;
      currentValue = currentValue + 1;
      let a = {};
      a['upVote'] = currentValue;
      this.feedbackCollection.doc(`count`).update(a);
    });

  }

  downVote() {
    this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
      var currentValue = doc.data().downVote;
      currentValue = currentValue + 1;
      let a = {};
      a['downVote'] = currentValue;
      this.feedbackCollection.doc(`count`).update(a);
    });

  }

  incrementTotalCount() {

    this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
      var currentValue = doc.data().total;
      currentValue = currentValue + 1;
      let a = {};
      a['total'] = currentValue;
      this.feedbackCollection.doc(`count`).update(a);
    });
  }

  postComments(feedbackSection: FeedbackSection) {
    this.feedbackCollection.doc(`detailFeedback`).ref.get().then((doc) => {
      let feedbackDetail = {};
      feedbackDetail['date'] = new Date();
      feedbackDetail['comments'] = feedbackSection.feedback;
      feedbackDetail['ratingUI'] = feedbackSection.rating;
      feedbackDetail['ratingResponse'] = feedbackSection.ratingResponse;
      feedbackDetail['ratingAll'] = feedbackSection.ratingAll;
      this.feedbackCollection.doc(`detailFeedback`).collection('UserFeedback').add(feedbackDetail);
    });
  }



}
