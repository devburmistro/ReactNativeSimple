import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { SignupLogo, Button, InputText } from '../../components/index';
import styles from './styles';

const fieldItems = [{
  fieldName: 'firstName',
  placeholder: 'First Name'
}, {
  fieldName: 'lastName',
  placeholder: 'Last Name'
}, {
  fieldName: 'email',
  placeholder: 'Email Address'
}];
export default class SignupView extends Component {
  static propTypes = {
    onShowLoginView: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired,
    onFacebookSignUp: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }
  onChangeText = (fieldName, text) => this.setState({ [fieldName]: text });
  renderInputAreas() {
    return (
      <View style={styles.formInputContainer}>
        {fieldItems.map(item => (
          <InputText
            key={item.fieldName}
            placeholder={item.placeholder}
            onChangeText={text => this.onChangeText(item.fieldName, text)}
            value={this.state[item.fieldName]}
          />
        ))}
      </View>
    );
  }
  renderButtons() {
    const { onFacebookSignUp, onSignUp } = this.props;
    return (
      <View style={styles.submitButtonContainer}>
        <Button title="Sign Up" onPress={onSignUp} />
        <Button
          buttonStyle={styles.fbButton}
          title="Sign Up With Facebook"
          onPress={onFacebookSignUp}
        />
      </View>
    );
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <SignupLogo onShowLoginView={this.props.onShowLoginView} />
        <View style={[styles.formContainer, { marginTop: 230 }]}>
          {this.renderInputAreas()}
          {this.renderButtons()}
        </View>
      </ScrollView>
    );
  }
}
