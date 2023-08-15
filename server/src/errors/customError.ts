export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor (errors: string) {
        super(errors);
    }

    abstract serializeErrors(): { message: string, field?: string }[]
}