import ProcessManager from "@utils/helpers/ProcessManager";

const { processEnv } = new ProcessManager();

const {
    STRIPE_SECRET_KEY
} = processEnv;

export default {
    secretKey: STRIPE_SECRET_KEY
};
