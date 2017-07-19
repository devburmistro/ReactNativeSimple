import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, TextInput } from 'react-native';
import { LoginLogo, Button, InputText } from '../../components';
import styles, { Colors } from './styles';

export default class LoginView extends Component {
  static propTypes = {
    onShowSignUpView: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    onForgotPassword: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
    };
  }
  onChangeText = (fieldName, text) => this.setState({ [fieldName]: text });
  renderInputAreas() {
    return (
      <View style={styles.formInputContainer}>
        <InputText
          placeholder="Email"
          onChangeText={text => this.onChangeText('email', text)}
          value={this.state.email}
        />
        <InputText
          placeholder="Password"
          onChangeText={text => this.onChangeText('password', text)}
          value={this.state.password}
          secureText
        />
      </View>
    );
  }
  renderButtons() {
    const { onForgotPassword, onLogin } = this.props;
    return (
      <View style={styles.submitButtonContainer}>
        <Button onPress={onLogin} title="Log In" />
        <Button
          onPress={onForgotPassword}
          buttonStyle={styles.forgotButton}
          labelStyle={styles.forgotLabel}
          title="Forgot Password?"
        />
      </View>
    );
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <LoginLogo onShowSignUpView={this.props.onShowSignUpView} />
        <View style={[styles.formContainer, { marginTop: 300 }]}>
          {this.renderInputAreas()}
          {this.renderButtons()}
        </View>
      </ScrollView>
    );
  }
}
