export class PayloadData {
  _id: string;

  constructor(data?: PayloadData) {
    if (data) {
      this._id = data._id;
    }
  }
}
