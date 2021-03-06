import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  rates: number[] = [1,2,3,4,5];
  previousRate: number
  rate: number = 0

  @Output() rated = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }

  setRate(rate){
    this.rate = rate
    this.previousRate = undefined;
    this.rated.emit(rate)
  }
   
  setTemporaryRate(r: number){
    if(this.previousRate === undefined){
      this.previousRate = this.rate
    }
    this.rate = r
  }

  clearTemporaryRate(){
    if(this.previousRate !== undefined){
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }
}
