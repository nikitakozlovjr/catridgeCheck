import express from "express";
import getCatridgeRouter from './router/getCatridge.router.js';
import postCatridgeRouter from './router/postCatridge.router.js';
const app = express();

app.use('/catridge', getCatridgeRouter);
app.use('/catridge', postCatridgeRouter);
export default app;