import { userDoc, UserModel } from "../models/index";
import { Request, Response, NextFunction } from "express";
import { WrongPayloadError } from "../errors/wrongPayloadError";
import { Password } from "../utils/password";
import jwt from 'jsonwebtoken';
import { JWT_KEY} from '../config/db'

export let userSignUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { userName, firstName, lastName, password } = req.body;
        let userIdExists = await UserModel.findOne({ userName });
        if (userIdExists) throw new WrongPayloadError('UserId already exists')

        let newUser = await new UserModel({
            firstName,
            lastName,
            password,
            userName
        }).save();
        console.log('error is herer')
        return res.status(200).json({
            status: true,
            message: "User created successfully",
            data: newUser
        });

    } catch (error) {
        console.log(error)
        next(error);
    }


}

export let userLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { userName, password } = req.body;
        let userDetails = await UserModel.findOne({ userName });

        if (!userDetails) throw new WrongPayloadError('Invalid userName');

        let isVerified = await Password.comparePassword(password, userDetails.password);
        if (!isVerified) throw new WrongPayloadError('Invalid password');

        let token = jwt.sign({ userName: userDetails.userName }, JWT_KEY);
        return res.status(200).json({
            status: true,
            data: userDetails,
            token
        });
    } catch (error) {
        console.log(error);
        next(error)
    }
}