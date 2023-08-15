import { Router, Request, Response, NextFunction } from "express";
import { query, body } from 'express-validator';
import { validateRequest } from "../middlewares/validateRequest";
import { UserModel } from "../models/index";
import { userLogin, userSignUp } from "../controllers/user";
import { validateToken } from "../middlewares/verifyToken";

const router: Router = Router();

let validateUserData = [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("userName").isString().notEmpty().withMessage("User id is required"),
    body('password').notEmpty().withMessage('Password is required'),

    validateRequest
]
router.post('/signUp', validateUserData, userSignUp);

let validateLoginPayload = [
    body("userName").notEmpty().withMessage("First name is required"),
    body('password').isString().withMessage('Password should be string').notEmpty().withMessage('Password is required'),

    validateRequest
]
router.post('/login', validateLoginPayload, userLogin);

router.get('/myDocuments', validateToken,)


export default router;