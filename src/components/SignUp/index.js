import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { signUpAction } from '../../actions';
import Spinner from '../Spinner';
import './signUp.scss';
import { toast } from 'react-toastify';
import { css } from 'glamor';
export class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    };
  }
componentDidUpdate() {
  {
    this.props.successMessage &&
    toast(
      this.props.successMessage,
      {
        position: toast.POSITION.TOP_CENTER,
        bodyClassName: css({
          background: '#FF8C00',
          textAlign: 'center',
          padding: '5px',
          color: 'white'
        })
      }
    );
  }
}

  handleChange (e) {
    return this.setState({
      [e.target.name] : e.target.value.trim()
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.signUp(this.state);
    return;
  }

  render () {
    return (
      <form className="signUp-form">
        <div className="signUp-form-header-container">
          <h5>CREATE ACCOUNT </h5>
        </div>
        <div className="signUp-form-element-container">
          <input type="text" name="userName" placeholder="Userame" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="signUp-form-element-container">
          <input type="email" name="email" placeholder="Email" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="signUp-form-element-container">
          <input type="password" name="password" placeholder="Password" onChange={(e) => this.handleChange(e) }/>
        </div>
        <div className="signUp-form-element-container">
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange= { (e) => this.handleChange(e) }/>
          {
            this.props.error &&  <p className="error-placeholder"> {this.props.error}</p>
          }
        </div>
        <button onClick = { (e) => this.handleSubmit(e) } disabled={this.props.inProgress}> Create Account</button>
        <div className="signUp-form-question-div">
          {this.props.children}
        </div>
        <div className="signUp-form-loader-container">
          { this.props.inProgress && <Spinner />}
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  inProgress: state.signUp.inProgress,
  error: state.signUp.error,
  successMessage: state.signUp.user.Message
});

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: user => dispatch(signUpAction(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
