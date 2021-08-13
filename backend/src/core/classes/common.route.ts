import { Router } from 'express';

export abstract class CommonRoute {
 path = '/';
 router = Router();

  constructor(path: string) {
    this.path = path;
    this.initializeRoutes();
  }

  abstract initializeRoutes(): void;
}
