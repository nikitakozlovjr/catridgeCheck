import express from "express";
import getCatridgeRouter from './router/getCatridge.router.js';
const app = express();

app.use('/catridge', getCatridgeRouter);
export default app;