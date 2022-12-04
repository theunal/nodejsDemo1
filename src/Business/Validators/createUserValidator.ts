import joi from 'joi';
import { CreateUserFormModel } from '../../Entities/Models/FormModels/createUserFormModel';

const createUserValidator = joi.object<CreateUserFormModel>({
    firstName: joi.string()
        .required()
        .messages({
            'string.empty': 'ad boş bırakılamaz.',
            'any.required': 'ad boş bırakılamaz.'
        }),

    lastName: joi.string()
        .required()
        .messages({
            'string.empty': 'soyad boş bırakılamaz.'
        }),

    isActive: joi.boolean()
})

export default createUserValidator