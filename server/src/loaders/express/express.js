import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import path from "path";

import { PRODUCTION } from "@utils/const/nodeEnv";
import ProcessManager from "@utils/helpers/ProcessManager";
import Version from "@utils/helpers/Version";
import initMorgan from "./helpers/initMorgan";
import middlewares from "@api/middlewares";
import paymentRouter from "@api/routes/payment/v1";
import rootRouter from "@api/routes/root";

export default ({ app }) => {
    const { nodeEnv } = new ProcessManager();
    const isProduction = nodeEnv === PRODUCTION;

    if (isProduction) {
        const root = process.cwd();
        const buildDirPath = path.join(root, "client", "build");
        app.use(express.static(buildDirPath));
        app.use("/", rootRouter);
    }

    const appMajorVersion = Version.getMajorVersion();
    const apiRoute = `/api/v${appMajorVersion}`;

    app.use(initMorgan());
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(compression());
    app.use(`${apiRoute}/payment`, paymentRouter);
    app.use(middlewares.logError);
    app.use(middlewares.handleError);

    return app;
};
