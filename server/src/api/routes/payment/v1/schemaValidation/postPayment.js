import bodySchema from "./schemas/body";

export default async (request, response, next) => {
    const { error } = bodySchema.validate(request.body);

    if (error) {
        return next(error);
    }

    next();
};
