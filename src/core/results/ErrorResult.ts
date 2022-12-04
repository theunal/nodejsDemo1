import { Result } from "./Result";

export class ErrorResult extends Result {
    constructor(message?: string) {
        if (message)
            super(false, message)
        else
            super(false, undefined)
    }
}
