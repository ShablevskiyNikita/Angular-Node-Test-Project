import { Document } from 'mongoose';
import { ITodo } from './todo.interface';

export type TodoModelType = ITodo & Document;
