import { CustomError } from "./customError";
import { ValidationError } from "express-validator";

export class RequestValidatorError extends CustomError {
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        super('Validation error');

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidatorError.prototype)
    }

    serializeErrors() {
        return this.errors.map((error) => {
            return { message: error.msg }
        });
    }
}