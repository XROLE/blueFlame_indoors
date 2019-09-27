import React, { Component } from 'react';
import './signin.scss';

export class SignIn extends Component {
  render () {
    return (
      <form className="signIn-form">
          <div className="signIn-form-header-container">
            <h5>SIGN IN </h5>
          </div>
          <div className="signIn-form-element-container">
            <input type="email" placeholder="Email" />
          </div>
          <div className="signIn-form-element-container">
            <input type="password" placeholder="Password" />
          </div>
          <button > Create Account</button>
          <div className="signIn-form-question-div">
            <p> Don't have an Account? <span>Sign Up</span></p>
          </div>
       </form>
    )
  }
}

export default SignIn;
