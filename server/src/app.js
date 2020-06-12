import express from "express";
import http from "http";

import { SIGTERM } from "@utils/const/signals";
import ProcessManager from "@utils/helpers/ProcessManager";
import loaders from "@loaders";
import logger from "@logger";

startServer();

async function startServer () {
    const app = express();
    const server = http.createServer(app);

    loaders.init({ app });

    const { baseUrl, port } = (await import("@config/server")).default;
    const { exit, nodeEnv } = new ProcessManager();

    server.listen(+port, (error) => (error)
        ? exit(error)
        : logSuccess({ baseUrl, nodeEnv })
    );

    process.on(SIGTERM, () => logInfoAndCloseServer(server));

    return app;
}

function logSuccess (options = {}) {
    const { baseUrl, nodeEnv } = options;
    logger.info(`🚀 Server is running at ${baseUrl} in ${nodeEnv} mode`);
}

function logInfoAndCloseServer (server) {
    server.close(() => logger.info("Process terminated"));
}
