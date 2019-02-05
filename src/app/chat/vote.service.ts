import { Injectable } from '@angular/core';
import { ChatService } from './chat.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private feedbackCollection: AngularFirestoreCollection<any>;
  private defaultIntentCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore, private chatService: ChatService) {
    this.feedbackCollection = this.afs.collection<any>('/feedback');
    this.defaultIntentCollection = this.afs.collection<any>('/defaultIntentResponse');
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
      console.log("currentValue" + currentValue);
      currentValue = currentValue + 1;
      let a = {};
      a['downVote'] = currentValue;
      if (isNaN(a['downVote'])) {
        a['downVote'] = 1;
      }
      console.log("currentValue" + a['downVote']);
      this.feedbackCollection.doc(`count`).update(a);
    });
    let downVoteQuesAns = {};
    downVoteQuesAns['date'] = new Date();
    this.feedbackCollection.doc(`detailFeedback`).ref.get().then((doc) => {
      downVoteQuesAns['Question'] = this.chatService.userMessage.contant;
      downVoteQuesAns['Answer'] = this.chatService.conversation.value[0].contant;
      this.feedbackCollection.doc(`detailFeedback`).collection('DownVoteQuesAns').add(downVoteQuesAns);
    });

  }
  countDefaultIntentDocument() {
    return this.defaultIntentCollection.doc(`intentDetails`).ref.get();
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
        this.feedbackCollection.doc(`count`).update(a);
      });

      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().ratingUI_total;
        currentValue = currentValue + rating;
        let a = {};
        a['ratingUI_total'] = currentValue;
        this.feedbackCollection.doc(`count`).update(a);
      }); 
    }

    if (ratingResponse != 0) {
      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().ratingResponse_count;
        currentValue = currentValue + 1;
        let a = {};
        a['ratingResponse_count'] = currentValue;
        this.feedbackCollection.doc(`count`).update(a);
      });

      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().ratingResponse_total;
        currentValue = currentValue + ratingResponse;
        let a = {};
        a['ratingResponse_total'] = currentValue;
        this.feedbackCollection.doc(`count`).update(a);
      });
    }

    if (ratingAll != 0) {
      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().ratingOverall_count;
        currentValue = currentValue + 1;
        let a = {};
        a['ratingOverall_count'] = currentValue;
        this.feedbackCollection.doc(`count`).update(a);
      });

      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().ratingOverall_total;
        currentValue = currentValue + ratingAll;
        let a = {};
        a['ratingOverall_total'] = currentValue;
        this.feedbackCollection.doc(`count`).update(a);
      });
    }
   
  }

}
