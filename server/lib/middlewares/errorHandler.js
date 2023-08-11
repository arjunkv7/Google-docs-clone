"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customError_1 = require("../errors/customError");
const ErrorHandler = (err, req, res) => {
    console.log("Error handler is working..");
    if (err instanceof customError_1.CustomError) {
        console.log("hii here");
        console.log(err.serializeErrors());
        res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    else
        res.status(500).send({ errors: ['Something went wrong'] });
};
exports.default = ErrorHandler;
