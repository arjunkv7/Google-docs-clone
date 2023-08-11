import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/customError";

const ErrorHandler = (err: CustomError, req: Request, res: Response) => {
    console.log("Error handler is working..")
    if (err instanceof CustomError) {
        console.log("hii here")
        console.log(err.serializeErrors())
        res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    else res.status(500).send({ errors: ['Something went wrong'] });
}

export default ErrorHandler;