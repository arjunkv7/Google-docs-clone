import { Router, Request, Response, NextFunction } from "express";
import { query } from 'express-validator';
import { validateRequest } from "../middlewares/validateRequest";
import { } from "../models/index";

const router: Router = Router();
let a = [ query("name").notEmpty()]

router.get('/signUp',a, validateRequest, (req: Request, res: Response, next: NextFunction) => {
    res.send('hii is working')

    next(req)
});

export default router;