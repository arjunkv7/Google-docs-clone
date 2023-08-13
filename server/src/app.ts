import express, { json, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from "morgan"
import { connectToDatabase } from "./config/db";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(json());
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send('hii')
})
import userRouter from './router/user'
app.use("/user", userRouter);



console.log('errro hanler pre')
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        message: "No route found"
    })
});


app.use(errorHandler);

connectToDatabase();

export default app;

