"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongPayloadError = void 0;
const customError_1 = require("./customError");
class WrongPayloadError extends customError_1.CustomError {
    constructor(error) {
        super(error);
        this.error = error;
        this.statusCode = 400;
    }
    serializeErrors() {
        return [{
                message: this.error
            }];
    }
}
exports.WrongPayloadError = WrongPayloadError;
