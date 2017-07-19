import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Label } from '../../components';
import styles from './styles';
import imgLocation from '../../images/icon_location.png';

export default class FindVenuesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  onSignUp = () => this.props.navigation.navigate('SignupLoginScene');
  onSkip = () => {
  };
  renderBottom() {
    return (
      <View style={styles.bottomContainer}>
        <Label value="Find venues around you." style={styles.labelTitle} />
        <Label
          style={styles.content}
          value="I have always waited for my life to change until I realised that it has been waiting for me to change this whole time"
        />
        <Button style={styles.btnFind} title="Find Venues" onPress={this.onFind} />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={imgLocation} style={styles.imgLocation} resizeMode="contain" />
        </View>
        {this.renderBottom()}
      </View>
    );
  }
}
