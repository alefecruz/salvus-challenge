import express, { Application } from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';

import globalError from './errors/GlobalError';
import uploadConfigAvatar from './config/uploadAvatar';
import uploadConfigDocs from './config/uploadDocs';

import './database';

class App {
  public server: Application;

  constructor() {
    this.server = express();
    this.server.use('/files', express.static(uploadConfigAvatar.directory));
    this.server.use('/docs', express.static(uploadConfigDocs.directory));
    this.middlewares();
    this.routes();
    this.server.use(globalError);
  }

  middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
