import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private feedbackCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.feedbackCollection = this.afs.collection<any>('/feedback');
  }

  upVote(){
    this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
      var currentValue = doc.data().upVote;
      currentValue = currentValue  +1;
      let a = {};
      a['upVote']= currentValue;
    this.feedbackCollection.doc(`count`).update(a);
    });
  }

  downVote() {
    this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
      var currentValue = doc.data().downVote;
      currentValue = currentValue  +1;
      let a = {};
      a['downVote']= currentValue;
    this.feedbackCollection.doc(`count`).update(a);
    });
  }

  incrementTotalCount(){
 
      this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
        var currentValue = doc.data().total;
        currentValue = currentValue  +1;
        let a = {};
        a['total']= currentValue;
      this.feedbackCollection.doc(`count`).update(a);
      });
  }

}
