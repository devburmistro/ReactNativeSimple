import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import imgBackground from '../../images/login_logo.jpg';
import { Metric, Colors } from '../../themes/index';

const styles = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgBackground: {
    width: Metric.screenWidth,
    height: 300
  },
  logoLabel: {
    width: Metric.screenWidth,
    fontFamily: 'Yellowtail',
    fontSize: 125,
    backgroundColor: 'transparent',
    color: Colors.brand.white,
    textAlign: 'center',
    paddingBottom: 50,
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 250,
    bottom: 0,
    flexDirection: 'row',
  },
  activeItem: {
    backgroundColor: Colors.brand.white,
  },
  buttonItem: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontFamily: 'Lato',
    backgroundColor: 'transparent',
  },
  activeLabel: {
    color: Colors.brand.blue,
  },
  inactiveLabel: {
    color: Colors.brand.white,
  },
});

export const LoginLogo = ({ onShowSignUpView }) => (
  <View style={styles.topContainer}>
    <View style={styles.topContainer}>
      <Image source={imgBackground} style={styles.imgBackground} resizeMode="cover" />
    </View>
    <View style={styles.topContainer}>
      <Text style={styles.logoLabel}>Stir</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonItem} onPress={onShowSignUpView}>
        <Text style={[styles.label, styles.inactiveLabel]}>Sign Up</Text>
      </TouchableOpacity>
      <View style={[styles.activeItem, styles.buttonItem]}>
        <Text style={[styles.label, styles.activeLabel]}>Log In</Text>
      </View>
    </View>
  </View>
);

LoginLogo.propTypes = {
  onShowSignUpView: PropTypes.func.isRequired,
};
