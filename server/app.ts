import express, { Request, Response } from 'express';
import { connectToDatabase } from './db';

const app = express();
const port = 3000;

connectToDatabase();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
