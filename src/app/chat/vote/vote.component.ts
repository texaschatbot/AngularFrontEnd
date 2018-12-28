import { Component } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  isVoted : boolean = false;

  constructor(private voteService: VoteService) { }

  upVote(){
    this.isVoted = true;
    this.voteService.upVote();
  }

  downVote(){
    this.isVoted = true;
    this.voteService.downVote();
  }
}
