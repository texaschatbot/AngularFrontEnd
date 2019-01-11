import { Injectable } from '@angular/core';
import { ChatService } from './chat.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


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

  postComments(feedback, ratingUI, ratingAll, ratingResponse) {
    this.feedbackCollection.doc(`detailFeedback`).ref.get().then((doc) => {
      let a = {};
      a['date'] = new Date();
      a['comments'] = feedback;
      a['ratingUI'] = ratingUI;
      a['ratingResponse'] = ratingResponse;
      a['ratingAll'] = ratingAll;
      this.feedbackCollection.doc(`detailFeedback`).collection('UserFeedback').add(a);
    });
  }



}
