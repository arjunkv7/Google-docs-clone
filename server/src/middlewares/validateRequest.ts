import { validationResult } from 'express-validator';
import { RequestValidatorError } from '../errors/requestValidatorError';
import { Request, Response, NextFunction } from 'express';

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    let errors = validationResult(req);
    
    if (!errors.isEmpty()) throw new RequestValidatorError(errors.array());

    next()
}