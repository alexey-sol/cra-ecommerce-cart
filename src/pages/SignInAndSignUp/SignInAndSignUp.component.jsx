import React from "react";
import SignIn from "components/SignIn";
import styles from "./SignInAndSignUp.module.scss";

function SignInAndSignUp () {
  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  );
};

export default SignInAndSignUp;
