"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middlewares/validateRequest");
const router = (0, express_1.Router)();
let a = [(0, express_validator_1.query)("name").notEmpty()];
router.get('/signUp', a, validateRequest_1.validateRequest, (req, res, next) => {
    res.send('hii is working');
    next(req);
});
exports.default = router;
