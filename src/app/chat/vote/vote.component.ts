import { Component } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  constructor(private voteService: VoteService) { }

  upVote(){
    this.voteService.upVote();
  }

  downVote(){
    this.voteService.downVote();
  }
}
