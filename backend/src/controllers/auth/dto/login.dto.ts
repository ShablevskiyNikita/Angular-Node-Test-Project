import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty({
    message: 'Require not empty email'
  })
  @IsEmail({}, {
    message: 'Require valid email'
  })
  public email: string;

  @IsString()
  @IsNotEmpty({
    message: 'Require not empty password'
  })
  public password: string;

  constructor(data: LoginUserDto) {
    if (data) {
      this.email = data.email;
      this.password = data.password;
    }
  }
}

