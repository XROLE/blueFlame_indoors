import React, { Component } from 'react';
import Modal from '../Modal';
import './signUp.scss';

export class SignUp extends Component {
  render () {
    return (
      <form className="signUp-form">
        <div className="signUp-form-header-container">
          <h5>CREATE ACCOUNT </h5>
        </div>
        <div className="signUp-form-element-container">
          <input type="email" placeholder="Email" />
        </div>
        <div className="signUp-form-element-container">
          <input type="password" placeholder="Password" />
        </div>
        <div className="signUp-form-element-container">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button > Create Account</button>
        <div className="signUp-form-question-div">
          {this.props.children}
        </div>
      </form>
    )
  }
}

export default SignUp;
