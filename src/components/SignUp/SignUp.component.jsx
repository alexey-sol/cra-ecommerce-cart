import CustomButton from "components/CustomButton";
import FormInput from "components/FormInput";
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {propTypes} from "./SignUp.validation";
import {signUpStart} from "redux/auth/auth.actions";
import styles from "./SignUp.module.scss";

class SignUp extends PureComponent {
  static propTypes = propTypes

  constructor (props) {
    super(props);

    this.state = {
      confirmPassword: "",
      displayName: "",
      email: "",
      password: ""
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {signUpStart} = this.props;
    const {confirmPassword, displayName, email, password} = this.state;

    if (password !== confirmPassword) {
      return console.error("Passwords don't match");
    }

    signUpStart({displayName, email, password});
  }

  resetForm = () => this.setState({
    confirmPassword: "",
    displayName: "",
    email: "",
    password: ""
  })

  render () {
    const {confirmPassword, displayName, email, password} = this.state;

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

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Display Name"
            name="displayName"
            required
            type="text"
            value={displayName}
          />

          <FormInput
            handleChange={this.handleChange}
            label="Email"
            name="email"
            required
            type="email"
            value={email}
          />

          <FormInput
            handleChange={this.handleChange}
            label="Password"
            name="password"
            required
            type="password"
            value={password}
          />

          <FormInput
            handleChange={this.handleChange}
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
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

const ConnectedSignUp = connect(
  null,
  mapDispatchToProps
)(SignUp);

export default ConnectedSignUp;
