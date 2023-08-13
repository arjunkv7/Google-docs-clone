"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.JWT_KEY = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URL = "mongodb+srv://Arjunroot:TsK6It1f4HvMdGwM@cluster0.scesfd7.mongodb.net/googleDocs";
exports.JWT_KEY = "th*&3oiudslkj&&^&#ljklfjsd";
let connectToDatabase = () => {
    mongoose_1.default.connect(MONGO_URL)
        .then(() => console.log('Database connected successfully...'))
        .catch((err) => console.log("Error connecting to database: ", err.message));
};
exports.connectToDatabase = connectToDatabase;
