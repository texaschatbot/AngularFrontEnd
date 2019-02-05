import { Component } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { VoteService } from 'src/app/chat/vote.service';
import { ChatService, DefaultIntent } from 'src/app/chat/chat.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'review-feedback',
  templateUrl: './review-feedback.component.html',
  styleUrls: ['./review-feedback.component.css']
})
export class ReviewFeedbackComponent {

  private itemsCollection: AngularFirestoreCollection<any>;
  private defaultAnsCollection: AngularFirestoreCollection<any>;
  private questAnsCollection: AngularFirestoreCollection<any>;
  deployment$;
  questAnswerList$;
  defaultIntentList$;
  last;
  pageLastDoc = new Map<number, any>();
  pageNumber: number = 0;
  totalComments: number = 0;
  totalPages: number;
  recordsPerPage: number = 6;
  isNotEmpty: boolean = false;
  totalQA: number;
  qAlast;
  qApageLastDoc = new Map<number, any>();
  qApageNumber: number = 0;
  qAtotalPages: number;
  qArecordsPerPage: number = 6;
  totalDefaultQA: number;
  defaultQAlast;
  defaultQApageLastDoc = new Map<number, any>();
  defaultQApageNumber: number = 0;
  defaultQAtotalPages: number;
  defaultQArecordsPerPage: number = 6;
  isResponseProvided: string;

  queryCountMapHeader: String = "Up Vote and Down Vote Count (total queries served ";

  myData = [];
  myData1 = [];

  myColumnNames = ['Category', 'Average Rating'];

  myColumnNames1 = ['Votes', 'Count'];

  myOptions = {
    vAxis: { gridlines: { count: 8 } },
    is3D: true,
    width: 500,
    height: 300
  };

  constructor(private afs: AngularFirestore, private voteService: VoteService, private chatService: ChatService) {
    this.voteService.countDocument().then((doc) => {
      this.totalComments = doc.data().totalDetailResponses;
      this.totalPages = this.totalComments / this.recordsPerPage;
      if (this.totalComments % this.recordsPerPage != 0) {
        this.totalPages = this.totalPages + 1;
      }
      console.log(this.totalPages);
      this.totalPages = (this.totalPages) - 0.5;


      this.totalPages = +this.totalPages.toFixed();
      console.log("pages firts table " + this.totalPages)
      this.next();
    });
    this.createChart();



    this.voteService.countDocument().then((doc) => {
      this.totalQA = doc.data().downVote;
      console.log("Total down Votes questions " + this.totalQA)
      this.qAtotalPages = this.totalQA / this.qArecordsPerPage;
      if (this.totalQA % this.qArecordsPerPage != 0) {
        this.qAtotalPages = this.qAtotalPages + 1;
      }
      console.log(this.qAtotalPages);
      this.qAtotalPages = (this.qAtotalPages) - 0.5;


      this.qAtotalPages = +this.qAtotalPages.toFixed();


      console.log("Total Pages QA " + this.qAtotalPages)
      this.nextQA();
    });

    this.voteService.countDefaultIntentDocument().then((doc) => {
      console.log(doc.data().intentCount);
      this.totalDefaultQA = doc.data().intentCount;
      this.defaultQAtotalPages = this.totalDefaultQA / this.defaultQArecordsPerPage;
      if (this.totalDefaultQA % this.defaultQArecordsPerPage != 0) {
        this.defaultQAtotalPages = this.defaultQAtotalPages + 1;
      }
      console.log(this.defaultQAtotalPages);
      this.defaultQAtotalPages = (this.defaultQAtotalPages) - 0.5;
      this.defaultQAtotalPages = +this.defaultQAtotalPages.toFixed();
      console.log("Total Pages Default QA " + this.defaultQAtotalPages)
      this.nextDefaultQA(doc.data().intentCount);

    });




  }

  createChart() {
    this.voteService.countDocument().then((doc) => {
      let ratingUI_count = doc.data().ratingUI_count;
      let ratingUI_total = doc.data().ratingUI_total;
      let UI_Rating: number = +(ratingUI_total / ratingUI_count);
      this.myData.push(['UI Rating', UI_Rating]);

      let ratingResponse_count = doc.data().ratingResponse_count;
      let ratingResponse_total = doc.data().ratingResponse_total;
      let Response_Rating: number = +(ratingResponse_total / ratingResponse_count);
      this.myData.push(['Response Rating', Response_Rating]);


      let ratingOverall_count = doc.data().ratingOverall_count;
      let ratingOverall_total = doc.data().ratingOverall_total;
      let Overall_Rating: number = +(ratingOverall_total / ratingOverall_count);
      this.myData.push(['Overall Rating', Overall_Rating]);

      let dummyData = ['', 0.0];
      this.myData.push(dummyData);





      let upVote = doc.data().upVote;
      this.myData1.push(['Up Votes', upVote]);

      let downVote = doc.data().downVote;
      this.myData1.push(['Down Votes', downVote]);

      let total = doc.data().total;
      this.myData1.push(['No Response', total - upVote - downVote]);

      this.queryCountMapHeader = this.queryCountMapHeader + total + ")";

      this.isNotEmpty = true;
    });
  }



  getNumber() {
    return new Array(this.totalPages);
  }

  specificRecord(page: number) {
    this.pageNumber = page;

    this.itemsCollection = this.afs.collection<any>(
      '/feedback/detailFeedback/UserFeedback',
      ref => ref.orderBy('date', 'desc')
        .startAfter(
          this.pageLastDoc.get(this.pageNumber - 1) != null
            ? this.pageLastDoc.get(this.pageNumber - 1) : "")
        .limit(this.recordsPerPage));

    this.deployment$ = this.itemsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(action => {

          this.last = action.payload.doc;
          this.pageLastDoc.set(this.pageNumber, this.last);
          return { $key: action.payload.doc.id, ...action.payload.doc.data() };
        });
      }));


  }

  next() {
    this.pageNumber = this.pageNumber + 1;
    console.log("Page No " + this.pageNumber);
    this.itemsCollection = this.afs.collection<any>(
      '/feedback/detailFeedback/UserFeedback',
      ref => ref.orderBy('date', 'desc')
        .startAfter(this.last != null ? this.last : "")
        .limit(this.recordsPerPage));
    this.deployment$ = this.itemsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(action => {
          this.last = action.payload.doc;
          this.pageLastDoc.set(this.pageNumber, this.last);
          return { $key: action.payload.doc.id, ...action.payload.doc.data() };
        });
      }));
  }

  nextQA() {
    this.qApageNumber = this.qApageNumber + 1;
    console.log("Page No " + this.qApageNumber);
    this.questAnsCollection = this.afs.collection<any>(
      '/feedback/detailFeedback/DownVoteQuesAns',
      ref => ref.orderBy('date', 'desc')
        .startAfter(this.qAlast != null ? this.qAlast : "")
        .limit(this.qArecordsPerPage));
    this.questAnswerList$ = this.questAnsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(action => {
          this.qAlast = action.payload.doc;
          this.qApageLastDoc.set(this.qApageNumber, this.qAlast);
          return { $key: action.payload.doc.id, ...action.payload.doc.data() };
        });
      }));
  }
  nextDefaultQA(count: number) {
    this.defaultQApageNumber = this.defaultQApageNumber + 1;
    console.log("Page No " + this.defaultQApageNumber);
    this.defaultAnsCollection = this.afs.collection<any>(
      '/defaultIntentResponse/intentDetails/defaultIntentDetails');

    this.defaultIntentList$ = this.defaultAnsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(action => {
          this.defaultQAlast = action.payload.doc;
          this.defaultQApageLastDoc.set(this.defaultQApageNumber, this.defaultQAlast);
          return { $key: action.payload.doc.id, ...action.payload.doc.data() };

        });
      }));



  }



  previous() {

    this.pageNumber = this.pageNumber - 1;

    this.itemsCollection = this.afs.collection<any>(
      '/feedback/detailFeedback/UserFeedback',
      ref => ref.orderBy('date', 'desc')
        .startAfter(
          this.pageLastDoc.get(this.pageNumber - 1) != null
            ? this.pageLastDoc.get(this.pageNumber - 1) : "")
        .limit(this.recordsPerPage));

    this.deployment$ = this.itemsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(action => {

          this.last = action.payload.doc;
          this.pageLastDoc.set(this.pageNumber, this.last);
          return { $key: action.payload.doc.id, ...action.payload.doc.data() };
        });
      }));
  }

  previousQA() {

    this.qApageNumber = this.qApageNumber - 1;

    this.questAnsCollection = this.afs.collection<any>(
      '/feedback/detailFeedback/DownVoteQuesAns',
      ref => ref.orderBy('date', 'desc')
        .startAfter(
          this.qApageLastDoc.get(this.qApageNumber - 1) != null
            ? this.qApageLastDoc.get(this.qApageNumber - 1) : "")
        .limit(this.qArecordsPerPage));

    this.questAnswerList$ = this.questAnsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(action => {

          this.qAlast = action.payload.doc;
          this.qApageLastDoc.set(this.qApageNumber, this.qAlast);
          return { $key: action.payload.doc.id, ...action.payload.doc.data() };
        });
      }));
  }

  previousDefaultQA() {

    this.defaultQApageNumber = this.defaultQApageNumber - 1;

    this.defaultAnsCollection = this.afs.collection<any>(
      '/defaultIntentResponse/intentDetails/defaultIntentDetails',
      ref => ref.startAfter(
        this.defaultQApageLastDoc.get(this.defaultQApageNumber - 1) != null
          ? this.defaultQApageLastDoc.get(this.defaultQApageNumber - 1) : "")
        .limit(this.defaultQArecordsPerPage));

    this.defaultIntentList$ = this.defaultAnsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(action => {

          this.defaultQAlast = action.payload.doc;
          this.defaultQApageLastDoc.set(this.defaultQApageNumber, this.defaultQAlast);
          return { $key: action.payload.doc.id, ...action.payload.doc.data() };
        });
      }));
  }

}
