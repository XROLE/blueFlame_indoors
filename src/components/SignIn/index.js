import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import  { signInAction } from '../../actions';
import './signin.scss';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signIn(this.state);
    return;
  }

  handleChange (e) {
    return this.setState({
      [e.target.name] : e.target.value.trim()
    });
  }

  render() {
    return (
      <form className="signIn-form">
        <div className="signIn-form-header-container">
          <h5>LOG IN </h5>
        </div>
        <div className="signIn-form-element-container">
          <input type="email" name="email" placeholder="Email" onChange= { (e) => this.handleChange(e) }/>
        </div>
        <div className="signIn-form-element-container">
          <input type="password" name="password" placeholder="Password" onChange= { (e) => this.handleChange(e) }/>
          {
            this.props.error &&  <p className="error-placeholder"> {this.props.error}</p>
          }
        </div>
        <button onClick = { (e) => this.handleSubmit(e) } disabled={this.props.inProgress}> Login </button>
        <div className="signIn-form-question-div">
          {this.props.children}
        </div>
        <div className="signIn-form-loader-container">
          { this.props.inProgress && <Spinner />}
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  inProgress: state.signIn.inProgress,
  error: state.signIn.error,
  successMessage: state.signIn.user.Message
});

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: user => dispatch(signInAction(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
