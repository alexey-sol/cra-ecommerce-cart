import CustomButton from "components/CustomButton";
import FormInput from "components/FormInput";
import React, {PureComponent} from "react";
import {auth, createUserProfileDocument} from "utils/firebase/firebase";
import styles from "./SignUp.module.scss";

class SignUp extends PureComponent {
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
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {confirmPassword, displayName, email, password} = this.state;

    if (password !== confirmPassword) {
      return console.error("Passwords don't match");
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email,
        password);

      await createUserProfileDocument(user, {displayName});
      this.resetForm();
    } catch (error) {
      console.error(error);
    }
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

export default SignUp;
