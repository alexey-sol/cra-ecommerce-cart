import envLoader from "./env";
import expressLoader from "./express";
import logger from "@logger";

export default ({ app }) => {
    envLoader();
    logger.info("🔵 Environment variables are ready");

    expressLoader({ app });
    logger.info("🔵 Express is ready");
};
