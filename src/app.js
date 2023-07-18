import express from 'express';

import inderxRouter from './router/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(inderxRouter)



export default app;
