import express, { json } from 'express';
import cors from 'cors';
import { connectToDatabase } from "./config/db";

const app = express();

app.use(cors());
app.use(json());

connectToDatabase();

export default app;

