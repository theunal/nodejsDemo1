import { DataResult } from "./DataResult";

export default class SuccessDataResult<T> extends DataResult<T> {
    constructor(data?: T, message?: string) {
        if (data && !message)
            super(data, true)

        if (message && !data)
            super(<T>undefined, true, message)

        if (message && data)
            super(data, true, message)

        if (!message && !data)
            super(<T>undefined, true)
    }
}
