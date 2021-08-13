import dotenv from 'dotenv';
import { App } from './app';

import { AuthRouter } from './controllers/auth/auth.router';
import { TodoRouter } from './controllers/todo/todo.router';

dotenv.config();
const app = new App([
  new AuthRouter(),
  new TodoRouter()
]);

app.listen();
