import { SIGTERM } from "@utils/const/signals";
import logger from "@logger";

class ProcessManager {
    constructor (nodeProcess = process) {
        this.nodeProcess = nodeProcess;
    }

    get processEnv () {
        return this.nodeProcess.env;
    }

    get nodeEnv () {
        const { NODE_ENV } = this.processEnv;
        const isString = typeof NODE_ENV === "string";

        return (isString)
            ? NODE_ENV.trim()
            : "";
    }

    exit (loggingMessage, code = 1) {
        if (loggingMessage) {
            this.logMessage(loggingMessage);
        }

        this.nodeProcess.exit(code);
    }

    async killGracefully (loggingMessage = "") {
        if (loggingMessage) {
            this.logMessage(loggingMessage);
        }

        this.nodeProcess.kill(this.nodeProcess.pid, SIGTERM);
    }

    logMessage (loggingMessage = "") {
        const isError = loggingMessage instanceof Error;

        if (isError) {
            logger.error(loggingMessage);
        } else {
            logger.info(loggingMessage);
        }
    }
}

export default ProcessManager;
