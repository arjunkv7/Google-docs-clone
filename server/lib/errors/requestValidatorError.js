"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidatorError = void 0;
const customError_1 = require("./customError");
class RequestValidatorError extends customError_1.CustomError {
    constructor(errors) {
        super('Validation error');
        this.errors = errors;
        this.statusCode = 400;
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidatorError.prototype);
    }
    serializeErrors() {
        return this.errors.map((error) => {
            return { message: error.msg };
        });
    }
}
exports.RequestValidatorError = RequestValidatorError;
