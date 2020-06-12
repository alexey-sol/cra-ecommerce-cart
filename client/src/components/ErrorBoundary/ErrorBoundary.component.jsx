import React, { Component } from "react";
import { defaultProps, propTypes } from "./ErrorBoundary.props";
import styles from "./ErrorBoundary.module.scss";

class ErrorBoundary extends Component {
    static defaultProps = defaultProps
    static propTypes = propTypes

    state = {
        error: null
    }

    static getDerivedStateFromError (error) {
        return {
            error
        };
    }

    componentDidCatch (error) {
        console.log(error);
    }

    render () {
        const { error } = this.state;
        const { children } = this.props;

        const errorMessageElement = (
            <section className={styles.container}>
                Sorry, something went wrong.
            </section>
        );

        return (error)
            ? errorMessageElement
            : children;
    }
}

export default ErrorBoundary;
