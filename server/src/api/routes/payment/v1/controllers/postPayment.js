import PaymentService from "@services/PaymentService/v1";
import sendResponse from "@utils/http/sendResponse";

export default async (request, response, next) => {
    const { body } = request;

    PaymentService.createCharge(body)
        .then(charge => sendResponse(response, charge))
        .catch(next);
};
