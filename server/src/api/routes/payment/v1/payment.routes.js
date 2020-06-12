import express from "express";

import controllers from "./controllers";
import schemaValidation from "./schemaValidation";

const router = express.Router();

router.get(
    "/*",
    schemaValidation.postPayment,
    controllers.postPayment
);

export default router;
