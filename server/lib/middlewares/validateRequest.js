"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const requestValidatorError_1 = require("../errors/requestValidatorError");
const validateRequest = (req, res, next) => {
    let errors = (0, express_validator_1.validationResult)(req);
    let err;
    if (!errors.isEmpty())
        err = new requestValidatorError_1.RequestValidatorError(errors.array());
    console.log(err);
    return next(err);
};
exports.validateRequest = validateRequest;
