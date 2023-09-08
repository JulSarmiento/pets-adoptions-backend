import express from 'express';

import inderxRouter from './router/index.js';
import errorHandler from './middlewares/error.handler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(inderxRouter);

app.use(errorHandler);

export default app;

