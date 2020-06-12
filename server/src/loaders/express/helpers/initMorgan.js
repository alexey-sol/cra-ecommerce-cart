import morgan from "morgan";

import logger from "@logger";

export default () => {
    return morgan("combined", getMorganOptions());
};

function getMorganOptions () {
    return {
        stream: {
            write: (message) => logger.info(message)
        }
    };
}
