import express, { json } from 'express';
import cors from 'cors';
import { connectToDatabase } from "./config/db";
import ErrorHandler from "./middlewares/errorMiddleware";

const app = express();

app.use(cors());
app.use(json());


app.get('/', (req, res) => {
    res.send('hii')
})
app.use((req, res, next) => {
    res.status(404).json({
        message: "No route found"
    })
})
app.use(ErrorHandler);

connectToDatabase();

export default app;

