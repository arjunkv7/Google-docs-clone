"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middlewares/validateRequest");
const user_1 = require("../controllers/user");
const verifyToken_1 = require("../middlewares/verifyToken");
const router = (0, express_1.Router)();
let validateUserData = [
    (0, express_validator_1.body)("firstName").notEmpty().withMessage("First name is required"),
    (0, express_validator_1.body)("userName").isString().notEmpty().withMessage("User id is required"),
    (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required'),
    validateRequest_1.validateRequest
];
router.post('/signUp', validateUserData, user_1.userSignUp);
let validateLoginPayload = [
    (0, express_validator_1.body)("userName").notEmpty().withMessage("First name is required"),
    (0, express_validator_1.body)('password').isString().withMessage('Password should be string').notEmpty().withMessage('Password is required'),
    validateRequest_1.validateRequest
];
router.post('/login', validateLoginPayload, user_1.userLogin);
router.get('/myDocuments', verifyToken_1.validateToken);
exports.default = router;
