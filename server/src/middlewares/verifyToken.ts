import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_KEY } from "../config/db";
import { NotAuthorizedError } from "../errors/notAuthorizedError";

interface userData {
    firstName: string;
    lastName?: string;
    userName: string;

}

declare global {
    namespace Express {
        interface Request {
            user: userData
        }
    }
}

export let validateToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let token = req.headers.token as string;
        if (!token || token == "") return res.send("Token is requried")
        
        let userData = jwt.verify(token, JWT_KEY) as userData;
        req.user = userData;
        next();
    } catch (error) {
        console.log(error)
        next(new NotAuthorizedError());
    }

}

