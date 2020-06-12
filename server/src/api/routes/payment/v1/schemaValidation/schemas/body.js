import Joi from "@hapi/joi";

export default Joi.object({
    amount: Joi
        .number()
        .required(),

    currency: Joi
        .string()
        .optional(),

    token: Joi
        .string()
        .required()
});
