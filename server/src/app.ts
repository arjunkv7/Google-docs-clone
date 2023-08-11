import express, { json } from 'express';
import cors from 'cors';
import { connectToDatabase } from "./config/db";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(json());


app.get('/', (req, res) => {
    res.send('hii')
})
import userRouter from './router/user'
app.use(userRouter);
app.use((req, res, next) => {
    res.status(404).json({
        message: "No route found"
    })
});





app.use(errorHandler);

connectToDatabase();

export default app;

