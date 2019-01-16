import { Injectable } from '@angular/core';
import { ChatService } from './chat.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FeedbackSection } from './feedback.section';


@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private feedbackCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore, private chatService: ChatService) {
    this.feedbackCollection = this.afs.collection<any>('/feedback');
  }

  countDocument() {
    return this.feedbackCollection.doc(`count`).ref.get();
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

  postComments(comment: String, rating: number, ratingResponse: number, ratingAll: number) {

    console.log(comment);
    console.log(rating);
    console.log(ratingResponse);
    console.log(ratingAll);
    this.feedbackCollection.doc(`detailFeedback`).ref.get().then((doc) => {
      let feedbackDetail = {};
      feedbackDetail['date'] = new Date();
      feedbackDetail['comments'] = comment.trim();
      feedbackDetail['ratingUI'] = rating;
      feedbackDetail['ratingResponse'] = ratingResponse;
      feedbackDetail['ratingAll'] = ratingAll;
      this.feedbackCollection.doc(`detailFeedback`).collection('UserFeedback').add(feedbackDetail);
    });

    this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
      var currentValue = doc.data().totalDetailResponses;
      currentValue = currentValue + 1;
      let a = {};
      a['totalDetailResponses'] = currentValue;
      this.feedbackCollection.doc(`count`).update(a);
    });

    if (rating != 0) {
      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().ratingUI_count;
        currentValue = currentValue + 1;
        let a = {};
        a['ratingUI_count'] = currentValue;
        this.feedbackCollection.doc(`ratingUI_count`).update(a);
      });

      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().ratingUI_total;
        currentValue = currentValue + rating;
        let a = {};
        a['ratingUI_total'] = currentValue;
        this.feedbackCollection.doc(`ratingUI_total`).update(a);
      }); 
    }

    if (ratingResponse != 0) {
      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().ratingResponse_count;
        currentValue = currentValue + 1;
        let a = {};
        a['ratingResponse_count'] = currentValue;
        this.feedbackCollection.doc(`ratingResponse_count`).update(a);
      });

      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().ratingResponse_total;
        currentValue = currentValue + ratingResponse;
        let a = {};
        a['ratingResponse_total'] = currentValue;
        this.feedbackCollection.doc(`ratingResponse_total`).update(a);
      });
    }

    if (ratingAll != 0) {
      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().ratingOverall_count;
        currentValue = currentValue + 1;
        let a = {};
        a['ratingOverall_count'] = currentValue;
        this.feedbackCollection.doc(`ratingOverall_count`).update(a);
      });

      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().ratingOverall_total;
        currentValue = currentValue + ratingAll;
        let a = {};
        a['ratingOverall_total'] = currentValue;
        this.feedbackCollection.doc(`ratingOverall_total`).update(a);
      });
    }
   
  }

}
