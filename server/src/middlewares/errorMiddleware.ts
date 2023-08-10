import { Request, Response, NextFunction } from "express";

const ErrorHandler = (err: Error, req: Request, res: Response) => {
    console.log(err);
}

export default ErrorHandler;