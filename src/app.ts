import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((req: Request, res: Response, next) => {
  res.set('X-Powered-By', 'PHP/7.1.7');
  next();
});

export { app };
