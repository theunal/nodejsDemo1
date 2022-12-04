import { Result } from "./Result";

export class SuccessResult extends Result {
    constructor(message?: string) {
        if (message)
            super(true, message)
        else
            super(true, undefined)
    }
}
