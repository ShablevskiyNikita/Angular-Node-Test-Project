import { UserDto } from '@rest/user/user.dto';

export class AuthData {
  access_token: string;
  user: UserDto;

  constructor(authorizationInfo?: AuthData) {
    if (authorizationInfo) {
      this.access_token = authorizationInfo.access_token ? authorizationInfo.access_token : null;
      this.user = authorizationInfo.user ? new UserDto(authorizationInfo.user) : null;
    }
  }
}
