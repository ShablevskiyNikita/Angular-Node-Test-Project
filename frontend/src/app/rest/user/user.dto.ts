export class UserDto {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  constructor(data?: UserDto) {
    if (data) {
      this._id = data._id;
      this.firstname = data.firstname;
      this.lastname = data.lastname;
      this.email = data.email;
      this.password = data.password;
    }
  }
}
