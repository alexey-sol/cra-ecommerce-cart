import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BaseButton from "components/BaseButton";
import FormInput from "components/FormInput";
import Popup from "components/Popup";

import {
    emailSignInStart,
    googleSignInStart,
    resetAuthState
} from "redux/auth/auth.actions";

import { defaultProps, propTypes } from "./SignIn.props";
import { selectError, selectIsPending } from "redux/auth/auth.selectors";
import styles from "./SignIn.module.scss";

SignIn.defaultProps = defaultProps;
SignIn.propTypes = propTypes;

function SignIn ({
    error,
    isPending,
    onEmailSignInStart,
    onGoogleSignInStart,
    onResetAuthState
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

    useEffect(() => {
        return () => {
            if (error) {
                onResetAuthState();
            }
        };
    }, [error, onResetAuthState]);

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
                        disabled={isPending}
                        type="submit"
                    >
                        Sign in
                    </BaseButton>

                    <BaseButton
                        className={styles.button}
                        disabled={isPending}
                        isGoogleSignIn
                        onClick={onGoogleSignInStart}
                        type="button"
                    >
                        Sign in with Google
                    </BaseButton>
                </div>
            </form>

            {Boolean(error) && (
                <Popup
                    onClose={onResetAuthState}
                    text={error.message}
                    theme="error"
                />
            )}
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    error: selectError,
    isPending: selectIsPending
});

const mapDispatchToProps = (dispatch) => ({
    onEmailSignInStart: (email, password) => dispatch(emailSignInStart({
        email,
        password
    })),
    onGoogleSignInStart: () => dispatch(googleSignInStart()),
    onResetAuthState: () => dispatch(resetAuthState())
});

const ConnectedSignIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);

export default memo(ConnectedSignIn);
