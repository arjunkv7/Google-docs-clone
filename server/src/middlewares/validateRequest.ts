import { validationResult, FieldValidationError } from 'express-validator';
import { RequestValidatorError } from '../errors/requestValidatorError';
import { Request, Response, NextFunction } from 'express';

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    let errors = validationResult(req);
    
    let err
    if (!errors.isEmpty()) err =  new RequestValidatorError(errors.array());
    return next(err)
    
}