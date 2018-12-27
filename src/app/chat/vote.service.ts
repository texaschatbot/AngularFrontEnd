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
    this.changeDocument('upVote');
  }

  downVote() {
    this.changeDocument('downVote');
  }

  incrementTotalCount(){
    this.changeDocument('total');
  }

  private changeDocument(property: string){

    let currentValue = 0;

    this.feedbackCollection.doc(`count`).ref.get().then((doc) => {
      currentValue = doc.data().upVote;
    });
    currentValue = currentValue  +1;

    let updateObj = {};

    if(property==='upVote') {
      updateObj ={upVote:currentValue};
    } else if(property==='downVote'){
      updateObj ={downVote:currentValue};
    } else if(property==='total') {
      updateObj ={total:currentValue};
    }

    this.feedbackCollection.doc(`count`).update(updateObj);
  }
}
