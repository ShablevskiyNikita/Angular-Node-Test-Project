import { Schema, model } from 'mongoose';
import { TodoModelType } from './todo.model.type';

const TodoSchema = new Schema(
  {
    title: {
      trim: true,
      type: String,
      required: true
    },
    finished: {
      type: Boolean,
      required: true,
      default: false
    },
    create_date: {
      type: Date,
      required: true,
      default: Date.now()
    }
  },
  {
    versionKey: false
  }
);

export const DeliveryModel = model<TodoModelType>('Todos', TodoSchema, 'Todos');
