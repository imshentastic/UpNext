import React from 'react';
import SignupFormContainer from './signup_form__container';
import LoginFormContainer from './login_form_container';

const SIGNUP = "signup";
const LOGIN = "login";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: SIGNUP
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(field) {
    return e => (
      this.setState({
        formType: field
      })
    );
  }

  render() {
    const { formType } = this.state;

    let form;

    if (formType === SIGNUP) {
      form = <SignupFormContainer />;
    } else {
      form = <LoginFormContainer />;
    }

    return (
      <div className="splash-container">
        <h1 className="splash-title">UpNext</h1>
        
        { form }

        <div className="form-buttons">
          <button id="sign-up-button" onClick={this.handleClick(SIGNUP)}>Sign Up</button>
          <button id="login-button" onClick={this.handleClick(LOGIN)}>Login</button>
        </div>
      </div>
    );
  }
}