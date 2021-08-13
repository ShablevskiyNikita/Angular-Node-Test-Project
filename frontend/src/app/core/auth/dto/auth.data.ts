import { UserDto } from '@rest/user/user.dto';

export class AuthData {
  accessToken: string;
  user: UserDto;

  constructor(authorizationInfo?: AuthData) {
    if (authorizationInfo) {
      this.accessToken = authorizationInfo.accessToken ? authorizationInfo.accessToken : null;
      this.user = authorizationInfo.user ? new UserDto(authorizationInfo.user) : null;
    }
  }
}
