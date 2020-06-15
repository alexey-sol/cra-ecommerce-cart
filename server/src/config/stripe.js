import ProcessManager from "@utils/helpers/ProcessManager";

const { processEnv } = new ProcessManager();
console.log('---', processEnv.STRIPE_SECRET_KEY)
const {
    STRIPE_SECRET_KEY
} = processEnv;

export default {
    secretKey: STRIPE_SECRET_KEY
};
