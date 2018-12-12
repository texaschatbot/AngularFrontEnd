export class HelpSection {

  constructor(private _id: String, private _label: String, private _intents: String[]) {
    this._id = _id;
    this._label = _label;
    this._intents = _intents;
  }

  get id() {
    return this._id;
  }

  set id(id: String) {
    this._id = id;
  }

  get label() {
    return this._label;
  }

  set label(label: String) {
    this._label = label;
  }

  get intents() {
    return this._intents;
  }

  set intents(intents: String[]) {
    this._intents = intents;
  }
}
