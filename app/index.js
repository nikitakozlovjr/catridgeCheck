import express from "express";
import catridgeRouter from './router/catridge.router.js';
const app = express();

app
app.use('/catridge', catridgeRouter);
export default app;