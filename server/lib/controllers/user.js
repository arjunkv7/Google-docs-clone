"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userSignUp = void 0;
const index_1 = require("../models/index");
const wrongPayloadError_1 = require("../errors/wrongPayloadError");
const password_1 = require("../utils/password");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../config/db");
let userSignUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { userName, firstName, lastName, password } = req.body;
        let userIdExists = yield index_1.UserModel.findOne({ userName });
        if (userIdExists)
            throw new wrongPayloadError_1.WrongPayloadError('UserId already exists');
        let newUser = yield new index_1.UserModel({
            firstName,
            lastName,
            password,
            userName
        }).save();
        console.log('error is herer');
        return res.status(200).json({
            status: true,
            message: "User created successfully",
            data: newUser
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.userSignUp = userSignUp;
let userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { userName, password } = req.body;
        let userDetails = yield index_1.UserModel.findOne({ userName });
        if (!userDetails)
            throw new wrongPayloadError_1.WrongPayloadError('Invalid userName');
        let isVerified = yield password_1.Password.comparePassword(password, userDetails.password);
        if (!isVerified)
            throw new wrongPayloadError_1.WrongPayloadError('Invalid password');
        let token = jsonwebtoken_1.default.sign({ userName: userDetails.userName }, db_1.JWT_KEY);
        return res.status(200).json({
            status: true,
            data: userDetails,
            token
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.userLogin = userLogin;
