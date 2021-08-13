import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import { CommonRoute } from './core/classes/common.route';

export class App {
  public app: express.Application;

  constructor(controllers: CommonRoute []) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(controllers);
  }

  public listen(): void {
    const port = process.env.PORT || '3000';
    this.app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  }

  public getServer(): express.Application {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(helmet({
      hidePoweredBy: true,
      contentSecurityPolicy: true,
      hsts: true,
      ieNoOpen: true,
      noSniff: true,
      frameguard: true,
      xssFilter: true
    }));

    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(methodOverride());
  }

  private initializeRoutes(routes: CommonRoute[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    });
  }

  private connectToTheDatabase() {
    const {
      DEV_ENV,
      MONGO_DB_USERNAME,
      MONGO_DB_PASSWORD,
      MONGO_DB_HOST,
      MONGO_DB_PORT,
      MONGO_DB_DATABASE,
      MONGO_DB_PARAMETERS
    } = process.env;

    const uri = DEV_ENV
      ? 'mongodb://localhost:27017/angular-node-example' :
      `mongodb://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}:${MONGO_DB_PORT}/`
      + `${MONGO_DB_DATABASE}${MONGO_DB_PARAMETERS}`;

    const options = {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    };

    mongoose.connect(uri, options)
      .then(() => console.log('Connected to DB'))
      .catch((error) => console.log(`Connection error: ${error.message}`));
  }
}
