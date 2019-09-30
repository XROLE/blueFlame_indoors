import React, { Component } from 'react';
import Modal from '../Modal';
import SignUp from '../SignUp';
import SignIn from '../SignIn';

export class Auth extends Component {
  constructor (props) {
    super (props)
    this.state = {
      showSignUp:true,
      showSignIn: false
    }
  }

  showSignIn () {
    return this.setState(
      {
        showSignUp: false,
        showSignIn: true
      }
    )
  }

  showSignUp () {
    return this.setState(
      {
        showSignUp: true,
        showSignIn: false
      }
    )
  }
  render () {
    return (
      <Modal>
        {
          this.state.showSignUp &&
          <SignUp>
            <p> Already have an Account? <span onClick={() => this.showSignIn()}>Sign In</span></p>
          </SignUp>
        }
        {
          this.state.showSignIn &&
          <SignIn>
           <p onClick={() => this.showSignUp()}> Don't have an Account? <span>Sign Up</span></p>
          </SignIn>
        }
      </Modal>
    )
  }
}

export default Auth;
