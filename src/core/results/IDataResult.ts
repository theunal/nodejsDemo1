﻿import { IResult } from "./IResult";

export interface IDataResult<T> extends IResult {
    Data: T
}
