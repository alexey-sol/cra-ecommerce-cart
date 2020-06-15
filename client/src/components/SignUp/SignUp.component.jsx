import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BaseButton from "components/BaseButton";
import FormInput from "components/FormInput";
import Popup from "components/Popup";
import { defaultProps, propTypes } from "./SignUp.props";
import { selectIsPending } from "redux/auth/auth.selectors";
import { signUpStart } from "redux/auth/auth.actions";
import styles from "./SignUp.module.scss";

SignUp.defaultProps = defaultProps;
SignUp.propTypes = propTypes;

function SignUp ({ isPending, onSignUpStart }) {
    const [validationError, setValidationError] = useState("");

    const [credentials, setCredentials] = useState({
        confirmPassword: "",
        displayName: "",
        email: "",
        password: ""
    });

    const {
        confirmPassword,
        displayName,
        email,
        password
    } = credentials;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return setValidationError("Passwords don't match");
        }

        onSignUpStart({ displayName, email, password });
    };

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <div className={styles.title}>
                    I do not have an account
                </div>

                <span>
                    Sign up with your email and password
                </span>
            </header>

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

                <BaseButton
                    className={styles.button}
                    disabled={isPending}
                    type="submit"
                >
                    SIGN UP
                </BaseButton>
            </form>

            {Boolean(validationError) && (
                <Popup
                    onClose={() => setValidationError("")}
                    text={validationError}
                    theme="error"
                />
            )}
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    isPending: selectIsPending
});

const mapDispatchToProps = (dispatch) => ({
    onSignUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

const ConnectedSignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

export default ConnectedSignUp;
