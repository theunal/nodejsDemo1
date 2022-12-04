import { IDataResult } from "./IDataResult";
import { Result } from "./Result";

export class DataResult<T> extends Result implements IDataResult<T>
{
    Data: T;
    constructor(data: T, success: boolean, message?: string) {

        if (message)
            super(success, message);
        else
            super(success, undefined);

        this.Data = data;
    }
}
