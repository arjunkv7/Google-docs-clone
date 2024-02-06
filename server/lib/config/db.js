"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.JWT_KEY = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URL = process.env.DB_URL || "";
exports.JWT_KEY = process.env.JWT_KEY || "";
if (MONGO_URL == "") {
    console.log('DB_URL is required in .env');
    process.exit();
}
let connectToDatabase = () => {
    console.log(MONGO_URL);
    mongoose_1.default.connect(MONGO_URL)
        .then(() => console.log('Database connected successfully...'))
        .catch((err) => {
        console.log("Error connecting to database: ", err.message);
        process.exit();
    });
};
exports.connectToDatabase = connectToDatabase;
