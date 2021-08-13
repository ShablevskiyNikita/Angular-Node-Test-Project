import jsonwebtoken from 'jsonwebtoken';
import { NextFunction, Response } from 'express';

import { RequestModifiedBody } from '../../core/interfaces/requests/request.modified.body';

import { UserDaoInstance } from '../users/user.dao';

import { LoginUserDto } from './dto/login.dto';

import { UnauthorizedException } from '../../core/classes/exceptions/unauthorized.exception';
import { InternalErrorException } from '../../core/classes/exceptions/internal.error.exception';

class AuthController {
  login = async (request: RequestModifiedBody<LoginUserDto>, response: Response, next: NextFunction) => {
    try {
      const user = UserDaoInstance.findByEmail(request.body.email);
      if (user && user.password === request.body.password) {
        const { password, ...result } = user;

        const { ACCESS_TOKEN_SECRET } = process.env;

        const jwtPayload = {
          _id: user._id
        };

        response.send({
          user: result,
          access_token: jsonwebtoken.sign(jwtPayload, ACCESS_TOKEN_SECRET, {
            expiresIn: '30m'
          })
        });
      } else {
        next(new UnauthorizedException());
      }
    } catch (error) {
      next(new InternalErrorException());
    }
  };
}

export const AuthControllerInstance = new AuthController();
