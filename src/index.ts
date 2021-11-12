require('dotenv').config();
import express, { Application, Request, Response } from 'express';
import routes from './routes';


const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.APP_PORT, () => console.log(`Listening on port ${process.env.APP_PORT}`));