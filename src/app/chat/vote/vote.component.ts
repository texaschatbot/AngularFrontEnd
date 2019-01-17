import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';

import { VoteService } from '../vote.service';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnDestroy {

  isVoted: boolean = false;

  public showloader: boolean = false;
  private subscription: Subscription;
  private timer: Observable<any>;

  constructor(private voteService: VoteService) { }

  public ngOnDestroy() {
    if (this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }

  public setTimer() {

    // set showloader to true to show loading div on view
    this.showloader = true;

    this.timer = timer(2000); // 1000 millisecond means 1 seconds
    this.subscription = this.timer.subscribe(() => {
      // set showloader to false to hide loading div from view after 5 seconds
      this.showloader = false;
    });
  }


  upVote() {
    this.isVoted = true;
    this.voteService.upVote();
    this.setTimer();
  }

  downVote() {
    this.isVoted = true;
    this.voteService.downVote();
    this.setTimer();
  }
}
