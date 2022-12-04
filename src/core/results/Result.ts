import { IResult } from './IResult';

export class Result implements IResult {
    Success: boolean
    Message: string

    constructor(success: boolean, message?: string) {
        this.Success = success;
        if (message)
            this.Message = message
    }
}