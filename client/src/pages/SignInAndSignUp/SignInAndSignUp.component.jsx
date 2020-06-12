import React from "react";

import SignIn from "components/SignIn";
import SignUp from "components/SignUp";
import styles from "./SignInAndSignUp.module.scss";

function SignInAndSignUp () {
    return (
        <section className={styles.container}>
            <SignIn />
            <SignUp />
        </section>
    );
}

export default SignInAndSignUp;
