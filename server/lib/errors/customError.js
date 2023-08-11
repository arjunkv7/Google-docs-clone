"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(errors) {
        super(errors);
    }
}
exports.CustomError = CustomError;
