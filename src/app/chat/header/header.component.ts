import { Component, OnInit } from '@angular/core';
import { FactsService } from '../facts.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  childSupportfacts: String[];

  constructor(private factsService: FactsService) {
  }

  ngOnInit() {
    this.childSupportfacts = this.factsService.facts;
  }


}
