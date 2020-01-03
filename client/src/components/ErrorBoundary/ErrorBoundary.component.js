import React, {Component} from "react";
import {defaultProps, propTypes} from "./ErrorBoundary.validation";
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

  componentDidCatch (error, info) {
    console.log(error);
  }

  render () {
    const {error} = this.state;
    const {children} = this.props;

    return (error)
      ? <div className={styles.container}>Sorry, the page is broken.</div>
      : children;
  }
}

export default ErrorBoundary;
