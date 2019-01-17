export class FeedbackSection {

  constructor(private _display: String, private _display1: String, private _feedback, private _rating: number, private _ratingResponse: number, private _ratingAll : number) {
    this._display = _display;
    this._display1 = _display1;
    this._rating = _rating;
    this._ratingResponse = _ratingResponse;
    this._ratingAll = _ratingAll;
    this._feedback = _feedback;
  }


  get display() {
    return this._display;
  }

  set display(_display: String) {
    this._display = _display;
  }

  get display1() {
    return this._display1;
  }

  set display1(_display1: String) {
    this._display1 = _display1;
  }

  get rating() {
    return this._rating;
  }

  set rating(_rating: number) {
    this._rating = _rating;
  }

  get ratingResponse() {
    return this._ratingResponse;
  }

  set ratingResponse(_ratingResponse: number) {
    this._ratingResponse = _ratingResponse;
  }

  get ratingAll() {
    return this._ratingAll;
  }

  set ratingAll(_ratingAll: number) {
    this._ratingAll = _ratingAll;
  }

  get feedback() {
    return this._feedback;
  }

  set feedback(_feedback: String) {
    this._feedback = _feedback;
  }
  
}
