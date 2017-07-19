import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import imgBackground from '../../images/signup_logo.jpg';
import { Metric, Colors } from '../../themes/index';

const styles = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 230,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgBackground: {
    width: Metric.screenWidth,
    height: 230
  },
  logoLabel: {
    width: Metric.screenWidth,
    fontFamily: 'Yellowtail',
    fontSize: 100,
    backgroundColor: 'transparent',
    color: Colors.brand.white,
    textAlign: 'center',
    paddingBottom: 50,
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 180,
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

export const SignupLogo = ({ onShowLoginView }) => (
  <View style={styles.topContainer}>
    <View style={styles.topContainer}>
      <Image source={imgBackground} style={styles.imgBackground} resizeMode="cover" />
    </View>
    <View style={styles.topContainer}>
      <Text style={styles.logoLabel}>Stir</Text>
    </View>
    <View style={styles.buttonContainer}>
      <View style={[styles.activeItem, styles.buttonItem]}>
        <Text style={[styles.label, styles.activeLabel]}>Sign Up</Text>
      </View>
      <TouchableOpacity style={styles.buttonItem} onPress={onShowLoginView}>
        <Text style={[styles.label, styles.inactiveLabel]}>Log In</Text>
      </TouchableOpacity>
    </View>
  </View>
);

SignupLogo.propTypes = {
  onShowLoginView: PropTypes.func.isRequired,
};
