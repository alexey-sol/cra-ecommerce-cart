import CustomButton from "components/CustomButton";
import FormInput from "components/FormInput";
import React, {useState} from "react";
import {connect} from "react-redux";
import {propTypes} from "./SignUp.validation";
import {signUpStart} from "redux/auth/auth.actions";
import styles from "./SignUp.module.scss";

SignUp.propTypes = propTypes;

function SignUp ({signUpStart}) {
  const [credentials, setCredentials] = useState({
    confirmPassword: "",
    displayName: "",
    email: "",
    password: ""
  });

  const {confirmPassword, displayName, email, password} = credentials;

  const handleChange = (event) => {
    const {name, value} = event.target;

    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return console.error("Passwords don't match");
    }

    signUpStart({displayName, email, password});
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          I do not have an account
        </h2>

        <span>
          Sign up with your email and password
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label="Display Name"
          name="displayName"
          required
          type="text"
          value={displayName}
        />

        <FormInput
          handleChange={handleChange}
          label="Email"
          name="email"
          required
          type="email"
          value={email}
        />

        <FormInput
          handleChange={handleChange}
          label="Password"
          name="password"
          required
          type="password"
          value={password}
        />

        <FormInput
          handleChange={handleChange}
          label="Confirm Password"
          name="confirmPassword"
          required
          type="password"
          value={confirmPassword}
        />

        <CustomButton type="submit">
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

const ConnectedSignUp = connect(
  null,
  mapDispatchToProps
)(SignUp);

export default ConnectedSignUp;
