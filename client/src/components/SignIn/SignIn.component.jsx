import React, { memo, useState } from "react";
import { connect } from "react-redux";

import BaseButton from "components/BaseButton";
import FormInput from "components/FormInput";
import { emailSignInStart, googleSignInStart } from "redux/auth/auth.actions";
import { propTypes } from "./SignIn.props";
import styles from "./SignIn.module.scss";

SignIn.propTypes = propTypes;

function SignIn ({
    onEmailSignInStart,
    onGoogleSignInStart
}) {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const { email, password } = credentials;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        onEmailSignInStart(email, password);
    };

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <div className={styles.title}>
                    I already have an account
                </div>

                <span>
                    Sign in with your email and password
                </span>
            </header>

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
                    <BaseButton
                        className={styles.button}
                        type="submit"
                    >
                        Sign in
                    </BaseButton>

                    <BaseButton
                        className={styles.button}
                        isGoogleSignIn
                        onClick={onGoogleSignInStart}
                        type="button"
                    >
                        Sign in with Google
                    </BaseButton>
                </div>
            </form>
        </section>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onEmailSignInStart: (email, password) => dispatch(emailSignInStart({
        email,
        password
    })),
    onGoogleSignInStart: () => dispatch(googleSignInStart())
});

const ConnectedSignIn = connect(
    null,
    mapDispatchToProps
)(SignIn);

export default memo(ConnectedSignIn);
