import CustomButton from "components/CustomButton";
import FormInput from "components/FormInput";
import React, {memo, useState} from "react";
import {connect} from "react-redux";
import {emailSignInStart, googleSignInStart} from "redux/auth/auth.actions";
import {propTypes} from "./SignIn.validation";
import styles from "./SignIn.module.scss";

SignIn.propTypes = propTypes;

function SignIn ({emailSignInStart, googleSignInStart}) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const {email, password} = credentials;

  const handleChange = (event) => {
    const {name, value} = event.target;

    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
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
            onClick={googleSignInStart}
            type="button"
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) => dispatch(emailSignInStart({
    email,
    password
  })),
  googleSignInStart: () => dispatch(googleSignInStart())
});

const ConnectedSignIn = connect(
  null,
  mapDispatchToProps
)(SignIn);

export default memo(ConnectedSignIn);
