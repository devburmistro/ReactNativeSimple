import React, { Component } from 'react';
import SignupView from './SignupView';
import LoginView from './LoginView';

export default class SignupLoginScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'login'
    };
  }
  onSignUp = () => {
    this.props.navigation.navigate('EditProfileScreen');
  };
  onFacebookSignUp = () => {
    this.props.navigation.navigate('EditProfileScreen');
  };
  onLogin = () => {
    this.props.navigation.navigate('EditProfileScreen');
  };
  onForgotPassword = () => {
    this.props.navigation.navigate('EditProfileScreen');
  };
  render() {
    if (this.state.mode === 'signup') {
      return (
        <SignupView
          onShowLoginView={() => this.setState({ mode: 'login' })}
          onSignUp={this.onSignUp}
          onFacebookSignUp={this.onFacebookSignUp}
        />
      );
    }
    return (
      <LoginView
        onShowSignUpView={() => this.setState({ mode: 'signup' })}
        onForgotPassword={this.onForgotPassword}
        onLogin={this.onLogin}
      />
    );
  }
}