export class LoginDto {
  email: string;
  password: string;

  constructor(loginInfo?: LoginDto) {
    this.email = loginInfo?.email ? loginInfo.email : '';
    this.password = loginInfo?.password ? loginInfo.password : '';
  }
}
