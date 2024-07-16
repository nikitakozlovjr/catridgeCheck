import express from "express";
import bodyParser from 'body-parser';
import getCatridgeRouter from './router/getCatridge.router.js';
import postCatridgeRouter from './router/postCatridge.router.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/catridge', getCatridgeRouter);
app.use('/catridge', postCatridgeRouter);
export default app;