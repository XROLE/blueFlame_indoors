import React, { Component } from 'react';
import Modal from '../Modal';
import SignUp from '../SignUp';
import SignIn from '../SignIn';

export class Auth extends Component {
  constructor (props) {
    super (props)
    this.state = {
      showSignIn: false
    }
  }
  render () {
    return (
      <Modal>
        <SignUp />
        <SignIn />
      </Modal>
    )
  }
}

export default Auth;
