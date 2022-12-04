import { IResult } from './../results/IResult';
import joi from 'joi';
import { Response } from "express";
import { ErrorResult } from '../results/ErrorResult';
import { SuccessResult } from '../results/SuccessResult';

export default function validationHelper(validator: joi.ObjectSchema<any>, body: any, res: Response): IResult {

    let validate = validator.validate(body)
    if (validate.error != undefined)
        return new ErrorResult(validate.error.details[0].message);

    return new SuccessResult();
}