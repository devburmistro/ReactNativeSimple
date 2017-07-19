import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { Button, InputText } from '../../components';
import iconPlus from '../../images/add_picture.png';
import styles, { Colors } from './styles';

const fieldItems = [{
  fieldName: 'firstName',
  placeholder: 'First Name',
  color: Colors.brand.darkGray
}, {
  fieldName: 'lastName',
  placeholder: 'Last Name',
  color: Colors.brand.darkGray
}, {
  fieldName: 'email',
  placeholder: 'Email Address',
  color: Colors.brand.darkGray
}, {
  fieldName: 'password',
  placeholder: 'Password',
  color: Colors.brand.darkGray
}];
export default class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }
  onSignUp = () => this.props.navigation.navigate('SignupLoginScene');
  onChangeText = (fieldName, text) => this.setState({ [fieldName]: text });
  renderTopArea() {
    return (
      <View style={styles.topArea}>
        <TouchableOpacity>
          <Image source={iconPlus} style={styles.iconPlus} resizeMode="contain" />
          <Text style={styles.labelAddPhoto}>Add A Picture</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderFormArea() {
    return (
      <View style={styles.formInputContainer}>
        {fieldItems.map(item => (
          <InputText
            color={item.color}
            key={item.fieldName}
            placeholder={item.placeholder}
            onChangeText={text => this.onChangeText(item.fieldName, text)}
            value={this.state[item.fieldName]}
            secureText={item.fieldName === 'password'}
          />
        ))}
        <View style={styles.submitButtonContainer}>
          <Button onPress={this.onSignUp} title="Sign Up" />
        </View>
      </View>
    );
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderTopArea()}
        {this.renderFormArea()}
      </ScrollView>
    );
  }
}