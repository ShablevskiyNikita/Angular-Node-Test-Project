import { validateDtoMiddleware } from '../../core/middleware/validate.dto.middleware';

import { CommonRoute } from '../../core/classes/common.route';
import { LoginUserDto } from './dto/login.dto';

import { AuthMiddlewareInstance } from './auth.middleware';
import { AuthControllerInstance } from './auth.controller';

export class AuthRouter extends CommonRoute {
  constructor() {
    super('/auth');
  }

  initializeRoutes() {
    this.router
      .post(
        `${this.path}/login`,
        validateDtoMiddleware(LoginUserDto),
        AuthMiddlewareInstance.castRequestBodyToDto(LoginUserDto),
        AuthControllerInstance.login);
  }
}
