import { NextFunction, Request, Response } from 'express';

export interface ICrudController {
  create(request: Request, response: Response, next: NextFunction): void

  update(request: Request, response: Response, next: NextFunction): void

  delete(request: Request, response: Response, next: NextFunction): void

  getOne(request: Request, response: Response, next: NextFunction): void

  getAll(request: Request, response: Response, next: NextFunction): void
}

