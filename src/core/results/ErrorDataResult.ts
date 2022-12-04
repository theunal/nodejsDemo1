import { DataResult } from "./DataResult";

export default class ErrorDataResult<T> extends DataResult<T> {
    constructor(data?: T, message?: string) {
        if (data && !message)
            super(data, false)

        if (message && !data)
            super(<T>undefined, false, message)

        if (message && data)
            super(data, false, message)

        if (!message && !data)
            super(<T>undefined, false)
    }
}
