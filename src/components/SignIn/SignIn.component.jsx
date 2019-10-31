import CustomButton from "components/CustomButton";
import FormInput from "components/FormInput";
import React, {useState} from "react";
import {signInWithGoogle} from "utils/firebase/firebase";
import styles from "./SignIn.module.scss";

function SignIn () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const {name, value} = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          I already have an account
        </h2>

        <span>
          Sign in with your email and password
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label="email"
          name="email"
          required
          type="email"
          value={email}
        />

        <FormInput
          handleChange={handleChange}
          label="password"
          name="password"
          required
          type="password"
          value={password}
        />
        <div className={styles.buttons}>
          <CustomButton type="submit">
            Sign in
          </CustomButton>

          <CustomButton
            isGoogleSignIn
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
