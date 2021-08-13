import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsNotEmpty({
    message: 'Require not empty title'
  })
  @IsString({
    message: 'Title must be a String'
  })
  title: string;

  @IsNotEmpty({
    message: 'Require not empty finished'
  })
  @IsBoolean({
    message: 'Finished must be Boolean'
  })
  finished: boolean;

  constructor(data?: UpdateTodoDto) {
    if(data){
      this.title = data.title;
      this.finished = data.finished;
    }
  }
}
