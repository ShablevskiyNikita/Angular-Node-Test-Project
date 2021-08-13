import { CommonMiddleware } from '../../core/middleware/common.middleware';

class AuthMiddleware extends CommonMiddleware {}

export const AuthMiddlewareInstance = new AuthMiddleware();
