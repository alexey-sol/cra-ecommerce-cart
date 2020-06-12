import Joi from "@hapi/joi";
import { DEVELOPMENT, PRODUCTION } from "@utils/const/nodeEnv";

export default Joi.object({
    BASE_URL: Joi
        .string()
        .required(),

    NODE_ENV: Joi
        .string()
        .trim()
        .valid(DEVELOPMENT, PRODUCTION)
        .required(),

    PORT: Joi
        .number()
        .required(),

    STRIPE_SECRET_KEY: Joi
        .string()
        .required()
});
