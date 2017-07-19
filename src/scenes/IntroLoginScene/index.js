import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button, Label } from '../../components';
import styles from './styles';
import imgIntroLogin from '../../images/intro_login_logo.png';

const label = 'Keep track of your favorite \nplaces at all times';
export default class IntroLoginScene extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  onSignUp = () => this.props.navigation.navigate('SignupLoginScene');
  onSkip = () => this.props.navigation.navigate('FindVenuesScreen');
  renderButtons() {
    return (
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" style={styles.button} onPress={this.onSignUp} />
        <Button
          title="Skip"
          labelStyle={styles.labelSkip}
          style={[styles.button, styles.buttonSkip]}
          onPress={this.onSkip}
        />
      </View>
    );
  }
  renderTopLabels() {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoLabel}>Stir</Text>
        </View>
        <View style={styles.commentContainer}>
          <Label value={label} style={styles.labelComment} />
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgIntroLogin}>
          <Image source={imgIntroLogin} style={styles.imgIntroLogin} resizeMode="cover" />
          {this.renderTopLabels()}
        </View>
        {this.renderButtons()}
      </View>
    );
  }
}
