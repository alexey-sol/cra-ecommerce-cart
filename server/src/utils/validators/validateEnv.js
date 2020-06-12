import ProcessManager from "@utils/helpers/ProcessManager";
import envSchema from "./schemas/env";

const { processEnv } = new ProcessManager();

export default (env = processEnv) => {
    return envSchema.validate(env, {
        stripUnknown: true
    });
};
