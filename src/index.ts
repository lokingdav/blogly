require('dotenv').config();
const cors = require('cors');
import express, { Application, Request, Response } from 'express';
import router from './router';
import database from './database';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

database.connect();

app.listen(process.env.APP_PORT, (): void => console.log(`Listening on port ${process.env.APP_PORT}`));

/**
 * Declare new properties on global express namespace
 */
declare global {
  namespace Express {
    interface Request {
      auth?: any
    }
  }
}