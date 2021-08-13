export class TodoDto {
  _id?: string;
  title: string;
  finished: boolean;
  create_date?: Date;

  constructor(data?: TodoDto) {
    if (data) {
      this._id = data?._id ? data._id : null;
      this.title = data?.title ? data.title : '';
      this.finished = data?.finished ? data.finished : false;
      this.create_date = data?.create_date ? data.create_date : null;
    }
  }
}
