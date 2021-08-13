import jsonwebtoken from 'jsonwebtoken';

import { NextFunction, Request, Response } from 'express';

import { PayloadData } from '../classes/payload.data';

import { UnauthorizedException } from '../classes/exceptions/unauthorized.exception';
import { UserDaoInstance } from '../../controllers/users/user.dao';

export const verifyRequestMiddleware = async (request: Request, response: Response, next: NextFunction) => {
  let accessToken;
  if (request.headers.authorization) {
    accessToken = request.headers.authorization.split(' ')[ 1 ];
    if (!accessToken) {
      next(new UnauthorizedException());
    } else {
      try {
        const { ACCESS_TOKEN_SECRET } = process.env;

        const verificationResponse = jsonwebtoken.verify(accessToken, ACCESS_TOKEN_SECRET) as PayloadData;

        if (verificationResponse) {
          const user = await UserDaoInstance.findById(verificationResponse._id);

          if (user) {
            next();
          } else {
            next(new UnauthorizedException());
          }
        } else {
          next(new UnauthorizedException());
        }
      } catch (error) {
        next(new UnauthorizedException());
      }
    }
  } else {
    next(new UnauthorizedException());
  }
};

