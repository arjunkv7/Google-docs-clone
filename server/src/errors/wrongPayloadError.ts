import { CustomError } from "./customError";

export class WrongPayloadError extends CustomError {
    statusCode = 400;
    
    constructor (public error: string) {
        super(error)
    }

    serializeErrors() {
        return [{
            message: this.error
        }]
    }
}