import { Request } from 'express';

export interface RequestModifiedBody<T> extends Request{
  body: T;
}
