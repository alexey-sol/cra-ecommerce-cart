import ProcessManager from "@utils/helpers/ProcessManager";

const { processEnv } = new ProcessManager();

const {
    BASE_URL,
    PORT
} = processEnv;

export default {
    baseUrl: BASE_URL,
    port: PORT
};
