import { Component } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { VoteService } from 'src/app/chat/vote.service';

@Component({
  selector: 'review-feedback',
  templateUrl: './review-feedback.component.html',
  styleUrls: ['./review-feedback.component.css']
})
export class ReviewFeedbackComponent {

  private itemsCollection: AngularFirestoreCollection<any>;
  deployment$;
  last;
  pageLastDoc = new Map<number, any>();
  pageNumber: number = 0;
  totalComments : number =0;
  totalPages: number;
  recordsPerPage: number = 6;
  isNotEmpty: boolean = false;

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

  constructor(private afs: AngularFirestore, private voteService: VoteService) {
    this.voteService.countDocument().then((doc) => {
      this.totalComments = doc.data().totalDetailResponses;
      this.totalPages = this.totalComments / this.recordsPerPage;
      if (this.totalComments % this.recordsPerPage != 0) {
        this.totalPages = this.totalPages + 1;
      }
      console.log(this.totalPages);
      this.totalPages = (this.totalPages) - 0.5;


      this.totalPages = +this.totalPages.toFixed();

      console.log("Total Comments : " +this.totalComments);
      console.log("Total Pages " + this.totalPages)
      this.next();
    });
    this.createChart();
  }

  createChart() {
    this.voteService.countDocument().then((doc) => {
      let ratingUI_count = doc.data().ratingUI_count;
      let ratingUI_total = doc.data().ratingUI_total;
      let UI_Rating : number =  +(ratingUI_total / ratingUI_count); 
      this.myData.push(['UI Rating', UI_Rating]);

      let ratingResponse_count = doc.data().ratingResponse_count;
      let ratingResponse_total = doc.data().ratingResponse_total;
      let Response_Rating : number = +(ratingResponse_total / ratingResponse_count);
      this.myData.push(['Response Rating', Response_Rating]);


      let ratingOverall_count = doc.data().ratingOverall_count;
      let ratingOverall_total = doc.data().ratingOverall_total;
      let Overall_Rating : number = +(ratingOverall_total / ratingOverall_count);
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



  getNumber () {
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

}
